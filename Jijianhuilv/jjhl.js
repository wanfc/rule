/*
https://raw.githubusercontent.com/chxm1023/Rewrite/main/jijianhuilv.js
极@简@汇@率

[rewrite_local]
^https?:\/\/(xremit\.xcurrency|explorer.tratao)\.com\/api\/client\/xtool\/vip url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Jijianhuilv/jjhl.jsj

[mitm]
hostname = xremit.xcurrency.com, explorer.tratao.com

*/

var chxm1023 = JSON.parse($response.body);

chxm1023.data = [
    {
      "uuid" : "D53A4774-B52D-4B2C-A9EB-2ECAD9999999",
      "id" : "dd9ce407ea984500a65957c2e0659999",
      "vipPayUnit" : "year",
      "benefits" : [

      ],
      "expire" : "2099-09-09 09:09:09",
      "vipStatus" : "paid",
      "update" : "2023-10-23 08:21:57",
      "vipLevel" : "senior",
      "userId" : "93fa3b800daa451646a5825c249c9999",
      "vipPayNum" : 1,
      "vipPayType" : "auto_sub",
      "created" : "2023-10-23 08:21:52"
    }
  ];

$done({body : JSON.stringify(chxm1023)});
