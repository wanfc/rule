/*

实@时@翻@译@官
更新日期：2024-1-23

[rewrite_local]
http:\/\/new\.xslm333\.xyz\/api\/getUserInfo url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Shishifanyiguan/ssfyg.js

[mitm]
hostname = new.xslm333.xyz

*/

var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "status" : 1,
  "expire_time" : "9999-12-30 00:00:00",
  "is_member" : 2,
  "cart_num" : 999999
};

$done({body : JSON.stringify(chxm1023)});
