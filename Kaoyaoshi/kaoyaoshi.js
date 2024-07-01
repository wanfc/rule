/*
考*药*狮
超*级*题*库
考*护*狮
解*锁*全*会*员*功*能 不*显*示*会*员

[rewrite_local]
https:\/\/gateway\.chaojitiku\.com\/h5\/(goods\/goodsInfo\/queryUserPayGoods|question\/testing\/getAppInfo) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/kaoyaoshi.js

[mitm]
hostname = gateway.chaojitiku.com

*/
var body = $response.body;
var url = $request.url;
if (body && url) {
    try {
        var jsonData = JSON.parse(body);
        if (url.includes("https://gateway.chaojitiku.com/h5/goods/goodsInfo/queryUserPayGoods")) {
            if (jsonData.data && jsonData.data.isAlreadyBuy !== undefined) {
                jsonData.data.isAlreadyBuy = true;
            }
        } else if (url.includes("https://gateway.chaojitiku.com/h5/question/testing/getAppInfo")) {
 //memberSubject是否分享？
            if (jsonData.data && jsonData.data.records) {
                jsonData.data.records.forEach(function(record) {
                    if (record.payType) {
                        record.payType = "Free";
                    }
                    if (record.memberAuth) {
                        record.memberAuth = false;
                    }
                    if (record.memberSubject !== undefined) {
                        record.memberSubject = true;
                    }
                });
            } else if (jsonData.data) {
              //购买？
                if (jsonData.data.payType) {
                    jsonData.data.payType = "Free";
                }
                if (jsonData.data.memberAuth) {
                    jsonData.data.memberAuth = false;
                }
                if (jsonData.data.memberSubject !== undefined) {
                    jsonData.data.memberSubject = true;
                }
            }
        }

        body = JSON.stringify(jsonData);
    } catch (error) {
        console.error("An error occurred while parsing JSON:", error);
    }
}

$done({ body: body });
