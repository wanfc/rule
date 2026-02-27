方案二：Windows PowerShell 脚本（无需装任何环境）
在 Windows 电脑上，传统的 .bat 批处理对 Emoji 和 UTF-8 编码极其不友好，容易变成乱码导致 API 报 404 错误。所以我们用更现代的 PowerShell。

在电脑桌面上新建一个文本文件，命名为 一键切节点.ps1。

右键 -> 编辑（或用记事本打开），将下面的代码复制进去（填入你的密码和节点名）：



# 1. 你的 OpenClash 面板密码（如果没有请留空 ""）
$secret = "你的面板密码"

# 2. 构造 API 地址，这里利用 PowerShell 自带的转义功能完美解决 Emoji 问题
$groupName = [uri]::EscapeDataString("🍎 Apple")
$url = "http://10.0.0.1:9090/proxies/$groupName"

# 3. 构造请求头
$headers = @{
    "Content-Type" = "application/json"
}
if ($secret -ne "") {
    $headers.Add("Authorization", "Bearer $secret")
}

# 4. 构造我们要切换到的目标节点 JSON
$body = '{"name": "🇭🇰 香港节点"}'

# 5. 发射指令！
try {
    Invoke-RestMethod -Uri $url -Method Put -Headers $headers -Body $body
    Write-Host "✅ 切换成功！" -ForegroundColor Green
} catch {
    Write-Host "❌ 切换失败: $_" -ForegroundColor Red
}

# 停留 2 秒让你看清结果再关闭窗口
Start-Sleep -Seconds 2




测试方法： 右键点击 AutoSwitch.ps1，选择“使用 PowerShell 运行”。