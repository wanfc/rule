/*

杂@志@天@下

[rewrite_local]
^https?:\/\/www\.fuyoutech\.club\/magworld\/member\/status url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Zazhitianxia/zztx.js

[mitm]
hostname = www.fuyoutech.club

*/

var chxm1023 = JSON.parse($response.body);

chxm1023.memberStatus = 2;
chxm1023.startTime = "2022-09-09 09:09:09";
chxm1023.finishTime = "2099-09-09 09:09:09";

$done({body : JSON.stringify(chxm1023)});
