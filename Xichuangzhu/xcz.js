/*
https://raw.githubusercontent.com/Yu9191/Rewrite/main/Xcz.js

[rewrite_local]
#西@窗@烛,诗@词@之@美
^https?:\/\/lchttpapi\.xczim\.com\/1.1\/users url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Xichuangzhu/xcz.js
#汉@字@的@故@事
^https?:\/\/avoscloud\.com\/1.1\/users url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Xichuangzhu/xcz.js
[mitm]
hostname = lchttpapi.xczim.com, avoscloud.com


*/
var Q = JSON.parse($response.body);
Q.membership = true;
Q.lifetimeMembership = true;
$done({ body: JSON.stringify(Q) });
