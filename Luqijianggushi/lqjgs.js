/*
https://raw.githubusercontent.com/chxm1023/Rewrite/main/luqijianggushi.js
陆@琪@讲@故@事

[rewrite_local]
https?:\/\/www\.luqijianggushi\.com\/api url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/luqijianggushi.js

[mitm]
hostname = www.luqijianggushi.com

*/

var body = $response.body;

body = body.replace(/\"is_share":\d+/g, '\"is_share":1');
body = body.replace(/\"is_vip":\d+/g, '\"is_vip":1');
body = body.replace(/\"_vip_endtime":".*?"/g, '\"_vip_endtime":"2099-09-09"');
body = body.replace(/\"expiretime":\d+/g, '\"expiretime":4092599349');
body = body.replace(/\"expires_in":\d+/g, '\"expires_in":4092599349');
body = body.replace(/\"vip_endtime":\d+/g, '\"vip_endtime":4092599349');
body = body.replace(/\"avatar":".*?"/g, '\"avatar":"https://raw.githubusercontent.com/chxm1023/Script_X/main/icon/dlam.png"');
body = body.replace(/\"theme_content":".*?"/g, '\"theme_content":"已解锁所有节目🎉"');

$done({body});
