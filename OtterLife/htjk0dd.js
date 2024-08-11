var chxm1023 = JSON.parse($response.body);

chxm1023.data = {
  ...chxm1023.data,
  "vipType" : "lifetime",
  "vipDeadline" : "2099-09-09T09:09:09.000Z",
  "isVip" : true
};

$done({body : JSON.stringify(chxm1023)});
