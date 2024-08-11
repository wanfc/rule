var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "money" : 999999,
  "isVip" : true,
  "vip_money" : 999999,
  "vip_type" : 1,
  "vip_time" : 4092599349
};

$done({body : JSON.stringify(chxm1023)});
