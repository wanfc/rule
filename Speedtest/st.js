/*

更新日期：2024-01-13
脚本作者：@anyeyey

[rewrite_local]
^https:\/\/api\.wlvpn\.com\/v3\/login url script-response-body https://raw.githubusercontent.com/anyehttp/quantumult-x/main/Adguard/Speedtest.js

[mitm]
hostname = api.wlvpn.com
*/

var anye = JSON.parse($response.body);
    anye.is_authorized = true;
    anye.sub_end_epoch = 4071927102000;
    anye.account_type = 1;

$done({body: JSON.stringify(anye)});
