剥离了所有不属于旁路由的冗余操作，是为你这台 **4vCPU + 4GB 内存 + VMXNET3 虚拟网卡** 旁路由量身定制的最终归档版。


---

# 🚀 OpenWrt 底层网络栈重构蓝皮书 (4GB 旁路由终极版)

**架构目标**：利用 VMXNET3 原生硬件多队列与 `irqbalance` 实现无损多核负载，激活 BBR 跨国抢占式拥塞控制，并利用海量内存彻底免疫 P2P/BT 导致的 NAT 连接池枯竭。绝对保持旁路由链路的纯净，拒绝任何多余的软件解包损耗。

### 🟢 第一阶段：保持链路纯净 (旁路由专属避坑)

*底层逻辑：旁路由接收到的已经是被主路由解包好的纯净 IP 数据帧。任何软/硬件流量卸载（Offloading）或软件数据包导向（RPS）都会破坏透明代理（Mihomo）的劫持效率，甚至增加内核排队延迟。*

**面板 (LuCI) 清理规范：**

1. 进入 **网络 -> 防火墙 -> 常规设置**：
* ❌ **启用 软件流量分流 (Software flow offloading)**：**取消勾选**。
* ❌ **启用 硬件流量分流 (Hardware flow offloading)**：**绝对不要勾选**。


2. 进入 **网络 -> 接口 -> 全局网络选项**：
* ❌ **数据包导向 (Packet Steering)**：**取消勾选**。


3. 点击 **保存并应用**。

---

### 🟢 第二阶段：硬件多核并发调度 (irqbalance)

*底层逻辑：将 VMXNET3 网卡的 `rx-0` 到 `rx-3` 四个原生硬件接收队列产生的中断，动态且均匀地分发给四个逻辑 CPU 核心，打破“单核有难，三核围观”的死局。*

**1. 核心安装指令 (SSH执行)：**

```bash
opkg update
opkg install irqbalance
/etc/init.d/irqbalance enable
/etc/init.d/irqbalance start

```

**2. 面板 (LuCI) 配置规范：**
进入 **系统 -> 服务 -> irqbalance**：

* **间隔 (Interval)**: `10`
* **最深缓存, 排除 CPU, 排除中断请求**: `全部留空`（让系统根据 VMXNET3 瞬时流量全量动态轮询）
* **显示调试输出**: `绝对不要勾选`（防无用日志写废底层存储）
* 点击 **保存并应用**。

---

*`VMXNET3` 是 VMware 专门为万兆（10Gbps+）环境开发的半虚拟化网卡驱动。它不像 E1000 那样用 CPU 去傻傻地模拟硬件指令，而是直接让虚拟机通过一段共享内存和宿主机的虚拟交换机（vSwitch）极速通信。*

最核心的是：**VMXNET3 原生支持硬件多队列（RSS）。**

但是，在 ESXi 的默认调度逻辑中，经常会出现“按需分配”的保守策略。我们需要亲自下场，去 OpenWrt 底层查一次房，看看 ESXi 到底有没有老老实实把 4 个收发队列交给你。

### 1. 验尸级查房：确认底层队列数量

请在你的 OpenWrt SSH 终端中输入这条指令（假设你的主物理/拨号网卡是 `eth0`，如果是其他请自行替换）：

```bash
ls /sys/class/net/eth0/queues/ | grep rx

```

**架构师的判决标准：**

* **完美状态：** 如果终端输出了 `rx-0`, `rx-1`, `rx-2`, `rx-3`。恭喜你，ESXi 已经把队列和你的 4 个逻辑核心（4 vCPU）完美对齐。你之前配的 `irqbalance` 正在火力全开，**你不需要改任何东西。**
* **残疾状态：** 如果终端**只输出了一个 `rx-0**`。说明 ESXi 锁死了多队列，你的网卡正在“单核裸奔”。这会成为你千兆网络的终极瓶颈。

---

### 🟢 第三阶段：内核跨国拥塞控制 (TCP BBR + fq_codel)

*底层逻辑：抛弃传统的 Cubic 丢包退让算法，使用 BBR 结合 OpenWrt 原生的 `fq_codel` 队列，在跨国长距离（高 RTT）链路中极其野蛮地抢占出口带宽。*

**SSH 执行指令：**

```bash
# 1. 安装 BBR 内核模块驱动
opkg update
opkg install kmod-tcp-bbr

# 2. 清理可能残留的错误配置并写入新配置
sed -i '/net.core.default_qdisc/d' /etc/sysctl.conf
sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.conf

# 3. 注入 OpenWrt 原生的 fq_codel 调度器与 bbr
echo "net.core.default_qdisc=fq_codel" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

# 4 强行热加载驱动并应用
modprobe tcp_bbr

# 5. 重新使配置生效
sysctl -p

# 6. 验证是否成功输出 bbr
sysctl net.ipv4.tcp_congestion_control

```

---

### 🟢 第四阶段：4GB 内存专属 NAT 并发扩容 (极限防假死)

*底层逻辑：默认 6 万的连接数在 BT/P2P 环境下极易被打穿。我们将哈希桶扩充至 13 万，最大连接数提至 52 万。仅吃掉约 160MB 内存，换来全屋网络绝对不宕机。同时将僵尸 TCP 回收时间从 5 天暴力压缩到 2 小时，提高连接池周转率。*

**SSH 执行指令：**

```bash
# 1. 动态注入哈希桶深度 (Buckets: 524288 / 4 = 131072)
echo 131072 > /sys/module/nf_conntrack/parameters/hashsize

# 2. 擦除旧配置并写入极限扩容与垃圾回收配置
sed -i '/net.netfilter.nf_conntrack_max/d' /etc/sysctl.conf
sed -i '/net.netfilter.nf_conntrack_tcp_timeout_established/d' /etc/sysctl.conf
sed -i '/net.netfilter.nf_conntrack_udp_timeout_stream/d' /etc/sysctl.conf

echo "net.netfilter.nf_conntrack_max=524288" >> /etc/sysctl.conf
echo "net.netfilter.nf_conntrack_tcp_timeout_established=7200" >> /etc/sysctl.conf
echo "net.netfilter.nf_conntrack_udp_timeout_stream=180" >> /etc/sysctl.conf

# 3. 重新加载并生效
sysctl -p

# 4. 将哈希桶深度写入开机启动脚本，实现固化 (防止重启后哈希冲突)
sed -i '/hashsize/d' /etc/rc.local
sed -i '/exit 0/i\echo 131072 > /sys/module/nf_conntrack/parameters/hashsize' /etc/rc.local
```

### 2. 8G 内存专属 NAT 并发扩容

一条 conntrack 记录在 64 位 Linux 内核中大概占用 320 字节（Bytes）的内存。
如果你有 8G 内存，我们可以极其傲慢地将这个表扩容到 **1,048,576（一百万）** 级别。
`1,000,000 × 320 Bytes ≈ 320 MB`

也就是说，容纳一百万个并发连接，只吃掉你 8G 内存里区区 **4%** 的空间，但换来的是即使全网 BT 跑满，软路由也稳如泰山的绝对从容。

### 3. 架构师级极限扩容指令 (防 Hash 冲突)

光改最大容量是不够的，这是一个极其普遍的极客盲区：**如果你只改了表的大小，不改哈希桶（Buckets）的深度，会导致严重的 Hash 冲突，反而把 CPU0 算死。** 黄金比例是 `Buckets = Max / 4`。

请在你的 SSH 终端中逐行执行以下指令（热注入 + 持久化）：

```bash
# 1. 动态注入哈希桶深度 (Buckets: 1048576 / 4 = 262144)
echo 262144 > /sys/module/nf_conntrack/parameters/hashsize

# 2. 写入 sysctl 配置文件进行持久化
echo "net.netfilter.nf_conntrack_max=1048576" >> /etc/sysctl.conf

# 🚀 3. 垃圾回收机制调优 (极其关键：防僵尸连接占坑)
# 默认的 TCP 建立连接超时时间长达 5 天 (432000秒)，在代理环境中纯属扯淡
# 我们将其暴力压缩到 2 小时 (7200秒)，让底层快速回收死亡节点
echo "net.netfilter.nf_conntrack_tcp_timeout_established=7200" >> /etc/sysctl.conf
# UDP 串流超时压缩到 3 分钟 (180秒)
echo "net.netfilter.nf_conntrack_udp_timeout_stream=180" >> /etc/sysctl.conf

# 4. 重新加载并生效配置
sysctl -p

# 5. 为了防止软路由重启后哈希桶深度复原，将其写入开机启动脚本
sed -i '/exit 0/i\echo 262144 > /sys/module/nf_conntrack/parameters/hashsize' /etc/rc.local
```

---

### 架构师结语

至此，这台设备的物理层（VMXNET3）、系统层（中断平衡）、网络栈（BBR+Conntrack）的重构已完美闭环。这是一套标准且极其抗压的现代旁路由内核方案。