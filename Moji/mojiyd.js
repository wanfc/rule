/*
https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/MOJiyd.js
MOJiyd
2024-01-14

[rewrite_local]
^https:\/\/api\.mojidict\.com\/app\/mojiread\/parse\/functions\/(target-fetch|reading-article-detail) url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Moji/mojiyd.js

[mitm]
hostname = api.mojidict.com
*/

var anye = JSON.parse($response.body);
    anye.1.isVIP = false;
    anye.result.isVIP = false;
$done({body : JSON.stringify(anye)});
