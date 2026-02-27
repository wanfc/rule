// ==UserScript==
// @name         OpenClash 一键策略配置器 (V2.1 强心针排错版)
// @namespace    http://tampermonkey.net/
// @version      2.1
// @description  增加硬编码秘钥支持，强制弹出报错信息
// @match        http://10.0.0.1:9090/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // ================= 配置区 =================
    // 1. 【核心排错】如果你 OpenClash 设了面板密码，请写在引号里！没设就留空 ""
    const MY_SECRET = "123456"; 

    // 2. 请确保这里的名字，和你面板上的名字 100% 完全复制粘贴一致！
    const MAPPING = {
        "☄️™️自定-外": "低倍率-美国0.1-自动",
        "🐨™️Bilibili 海外": "台湾-☁️-自动",
        "🎵 字节海外": "美国-💸-自动",
        "🐧™️腾讯国际": "香港-☁️-自动",
        "🔆™️国外AI": "🟣🟣🟣美国-故障",
        "🍎™️Apple智能": "🟣🟣🟣美国-故障",
        "🎮™️游戏国际": "美国-💸-自动",
        "🥥™️Github1s": "日本-💸-自动",
        "🥥™️全球开发者": "日本-💸-自动",
        "🍎™️Apple": "美国-🌀-自动",
        "🍍™️Bing": "美国-💸-自动",
        "Ⓜ️™️微软": "美国-💸-自动",
        "🧀™️Google": "🟣🟣🟣美国-故障",
        "📮™️Telegram": "新加坡-☁️-自动",
        "🍀™️Dcard": "台湾-☁️-自动",
        "🍉™️外文社媒": "美国-💸-自动",
        "💶™️加密货币": "新加坡-☁️-自动",
        "💳™️PayPal": "美国-🌀-自动",
        "🧰™️Password": "香港-☁️-自动",
        "💊™️Adguard": "香港-☁️-自动",
        "🖍️™️Adobe激活": "美国-☁️-自动",
        "🖍️™️Adobe": "美国-☁️-自动",
        "🍞™️外文传媒": "美国-💸-自动",
        "🍋™️国外娱乐": "美国-💸-自动",
        "🔞™️NSFW": "低倍率-美国0.1-自动",
        "🛫™️GEO国外": "美国-💸-自动",
        "🛟™️兜底": "美国-💸-自动"
    };
    // ==========================================

    setInterval(() => {
        if (!window.location.hash.includes('/proxies')) {
            const existingBtn = document.getElementById('my-clash-auto-btn');
            if (existingBtn) existingBtn.style.display = 'none';
            return;
        }

        let btn = document.getElementById('my-clash-auto-btn');

        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'my-clash-auto-btn';
            btn.innerHTML = '🚀 一键切节点';
            btn.style.cssText = 'position:fixed; bottom:50px; right:50px; z-index:2147483647; padding:15px 30px; background-color:#ff5722; color:#fff; border:none; border-radius:12px; cursor:pointer; font-weight:900; font-size:16px; box-shadow: 0 8px 16px rgba(0,0,0,0.3); transition: all 0.2s;';
            btn.onmouseover = () => btn.style.transform = 'scale(1.1)';
            btn.onmouseout = () => btn.style.transform = 'scale(1)';

            btn.addEventListener('click', async () => {
                btn.innerHTML = '🔄 下发中...';
                btn.style.backgroundColor = '#ffc107';

                const apiUrl = window.location.origin;
                // 优先使用你填写的密码，如果没填再去偷浏览器的
                const secret = MY_SECRET || localStorage.getItem('secret') || localStorage.getItem('yacd-secret') || '';
                const headers = { 'Content-Type': 'application/json' };
                if (secret) headers['Authorization'] = `Bearer ${secret}`;

                let successCount = 0;
                let errorMsgs = [];

                for (const [group, node] of Object.entries(MAPPING)) {
                    try {
                        const response = await fetch(`${apiUrl}/proxies/${encodeURIComponent(group)}`, {
                            method: 'PUT',
                            headers: headers,
                            body: JSON.stringify({ name: node })
                        });
                        
                        if (response.ok) {
                            successCount++;
                            console.log(`✅ 成功: [${group}] 切换到 [${node}]`);
                        } else {
                            // 抓出现行！是 401 还是 404？
                            const errText = await response.text();
                            errorMsgs.push(`❌ [${group}] 失败! 状态码: ${response.status}. 原因: ${errText || '未知'}`);
                        }
                    } catch (err) {
                        errorMsgs.push(`🚨 网络错误: ${err.message}`);
                    }
                }
                
                // 判决时刻
                if (errorMsgs.length > 0) {
                    btn.innerHTML = '⚠️ 发生错误! 看弹窗';
                    btn.style.backgroundColor = '#f44336';
                    alert("报告！切换出错了，原因如下：\n\n" + errorMsgs.join("\n") + "\n\n请检查密码是否正确，或者名字是否多敲了空格！");
                } else {
                    btn.innerHTML = `✅ 成功切换 ${successCount} 个!`;
                    btn.style.backgroundColor = '#4caf50';
                    setTimeout(() => location.reload(), 1500); 
                }
            });

            document.body.appendChild(btn);
        } else {
            btn.style.display = 'block';
        }
    }, 1000);
})();
