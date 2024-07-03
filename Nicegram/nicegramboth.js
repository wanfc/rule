/*
https://raw.githubusercontent.com/chxm1023/Rewrite/main/nicegram.js
Nicegram(兼容新老旧版)
2023-11-30
1.4.6一次性解锁：打开APP → 设置 → 选择白色Nicegram → 往下拉找到【恢复购买】
1.4.7非一次性解锁：打开APP → 助手 → 点击【释放您的Nicegram特权】之后关闭APP，重新打开即可

[rewrite_local]
^https?:\/\/(nicegram\.cloud\/api\/v\d\/user\/info|restore-access\.indream\.app\/restoreAccess) url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Nicegram/nicegramboth.js

[mitm]
hostname = nicegram.cloud, restore-access.indream.app

*/


const url = $request.url;
const isQX = typeof $task !== "undefined";
var chxm1023 = JSON.parse($response.body);
const subscriptionTest = /https:\/\/nicegram\.cloud\/api\/v\d\/user\/info/;
const premiumTest = /https:\/\/restore-access\.indream\.app\/restoreAccess/;

if (subscriptionTest.test(url)) {
  chxm1023.data.user = {
    ...chxm1023.data.user,
    subscription: true,
    store_subscription: true,
    lifetime_subscription: true
  };
}

if (premiumTest.test(url)) {
  chxm1023["data"] = {"premiumAccess": true};
}

function finalizeResponse(content) {
  return { status: isQX ? "HTTP/1.1 200 OK" : 200, headers: $response.headers, body: JSON.stringify(content) };
}

$done(isQX ? finalizeResponse(chxm1023) : chxm1023);
