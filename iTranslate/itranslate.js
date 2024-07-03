/*
https://raw.githubusercontent.com/chxm1023/Rewrite/main/itranslate.js
iTranslate 翻译
进入App出现付费按[恢复购买]

[rewrite_local]
^https?:\/\/ssl-api\.itranslateapp\.com\/accounts\/.+\/(subscriptions\/verify|marketing\/consent\/status) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/itranslate.js

[mitm]
hostname = ssl-api.itranslateapp.com

*/


var chxm1023 = JSON.parse($response.body);
const vip = '/subscriptions/verify';
const active = '/marketing/consent/status';

if ($request.url.indexOf(vip) != -1){
  chxm1023.licenses = [
    {
      "product_id" : "com.itranslate.pro.yearly",
      "bundle_id" : "com.outerspaceapps.itranslate",
      "is_trial_period" : true,
      "original_transaction_id" : "160001314520000",
      "expires_date_ms" : 4092599350000,
      "transaction_id" : "160001314520000"
    }
  ];
}

if ($request.url.indexOf(active) != -1){
  chxm1023 ={
  "is_active" : true
  };
}

$done({body : JSON.stringify(chxm1023)});
