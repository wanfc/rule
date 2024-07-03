/*
https://raw.githubusercontent.com/Yu9191/Rewrite/main/niujin10.js
牛@津@高@阶@词@典@第@十@版
1.0.7

[rewrite_local]
^https:\/\/oxfordx\.cp\.com\.cn\/api\/pay\/apple_notify url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/niujin10.js
#去除首页下方广告
^https:\/\/oxadmin\.cp\.com\.cn\/api\/hot\/index url reject-dict
#去除首页下方广告
^https:\/\/oxadmin\.cp\.com\.cn\/api\/advertise\/banner url reject-dict


[mitm]
hostname = oxfordx.cp.com.cn

*/

var body = JSON.parse($response.body);

body.data.user.is_vip = 1;
body.data.user.expire_date = "2099-12-31 04:01:05";

$done({ body: JSON.stringify(body) });
