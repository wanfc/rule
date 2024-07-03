/*
https://raw.githubusercontent.com/WeiGiegie/666/main/slzd.js
三@联@中@读
知识会员+数字刊会员
2024年6月30日

[rewrite_local]
^https?:\/\/apis\.lifeweek\.com\.cn\/(vip\/loadMyVipV2\?|index\/home.do\?).*$ url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Sanlianzhongdu/slzd.js

[mitm] 
hostname = apis.lifeweek.com.cn

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = "/index/home.do?";
const p2 = "/vip/loadMyVipV2?";


if (url.indexOf(p1) != -1) {
    obj = {
        "extraInfoMap": {

        },
        "model": {
            "msgRed": 0,
            "registerTime": 1719756970534,
            "arOpen": true,
            "visitor": {
                "uid": 2746224,
                "ticket": "1719756970559blyvx"
            },
            "buyZhuanlanNewArticle": 1,
            "buyMsgNum": 1,
            "userInfo": {
                "phone": "",
                "uid": 2746224,
                "userVflag": 0,
                "remark": "仅供学习与交流",
                "pic": "https://zdimg.lifeweek.com.cn/app/20230410/16811146599505136.jpg",
                "isVip": true,
                "name": "https://t.me/GieGie777"
            }
        },
        "resultMsg": "操作成功！",
        "redirectUrl": null,
        "resultCodeBean": "SUCCESS",
        "resultCode": "SUCCESS",
        "success": true,
        "pickParams": {

        }
    }


    body = JSON.stringify(obj);
}
if (url.indexOf(p2) != -1) {
    obj = {
        "extraInfoMap": {

        },
        "model": [{
            "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
            "vipLevel": 4,
            "vipExpiration": "2999-09-09",
            "vip": true,
            "username": "GEGE",
            "vipValid": true
        }, {
            "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
            "vipLevel": 5,
            "vipExpiration": "",
            "vip": false,
            "username": "GEGE",
            "vipValid": true
        }, {
            "userHeadPic": "https://zdimg.lifeweek.com.cn/app/20230410/16810960185662892.jpg",
            "vipLevel": 6,
            "vipExpiration": "2999-09-09",
            "vip": true,
            "username": "GEGE",
            "vipValid": true
        }],
        "resultMsg": "操作成功！",
        "redirectUrl": null,
        "resultCodeBean": "SUCCESS",
        "resultCode": "SUCCESS",
        "success": true,
        "pickParams": {

        }
    }
    body = JSON.stringify(obj);
}

$done({
    body
});
