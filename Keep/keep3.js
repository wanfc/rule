/*
脚本功能：keep 解锁会员课，直播课
*/

[rewrite_local]
 
^http[s]?:\/\/.+keep.+(athena/v7/people/my|/ad/preload|details|preview|/start|liveStream/schedule|course/v3/plans|/home/prime/page).*$ url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Keep/keep3-1.js

[mitm]

hostname = *keep*
