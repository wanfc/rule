/*
https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Speedtest.js
2024-01-13

[rewrite_local]
^https:\/\/api\.wlvpn\.com\/v3\/login url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Speedtest/speedtest.js

[mitm]
hostname = api.wlvpn.com
*/

var anye = JSON.parse($response.body);
    anye.is_authorized = true;
    anye.sub_end_epoch = 4071927102000;
    anye.account_type = 1;

$done({body: JSON.stringify(anye)});
