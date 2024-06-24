// Quantumult X引用地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/nicegram.js
// Surge/Shadowrocket 模块地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Surge/nicegram.sgmodule
// Loon 插件地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Loon/nicegram.plugin
// Stash 覆写地址： https://raw.githubusercontent.com/czy13724/Quantumult-X/main/Stash/nicegram.stoverride

/*
新版
使用说明： 要激活高级版，请单击底部的“助手”，然后单击“释放您的 Nicegram 福利”，最后单击底部的“开始”。完成此操作后，Premium 应该已解锁

[rewrite_local]
^https?:\/\/nicegram\.cloud\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) url script-response-body https://raw.githubusercontent.com/czy13724/Quantumult-X/main/scripts/nicegram.js

[mitm]
hostname = nicegram.cloud
*/
var body = $response.body;

body = body.replace(/"store_subscription":false/g, '"store_subscription":true');
body = body.replace(/"lifetime_subscription":false/g,'"lifetime_subscription":true');
body = body.replace(/"subscription":false/g,'"subscription":true');


$done({ body });
