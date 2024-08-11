/*
https://raw.githubusercontent.com/chxm1023/Rewrite/main/otterlife.js
2024-08-06

[rewrite_local]
^https?:\/\/otter-api\.codefuture\.top\/v\d\/user\/current url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/OtterLife/htjk0dd.js

[mitm]
hostname = otter-api.codefuture.top

*/

var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "vipType" : "lifetime",
  "vipDeadline" : "2099-09-09T09:09:09.000Z",
  "isVip" : true
};

$done({body : JSON.stringify(chxm1023)});
