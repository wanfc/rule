[rewrite_local]

^https://api.gotokeep.com.+ url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Keep/Keep2-1.js

[mitm]

hostname = api.gotokeep.com