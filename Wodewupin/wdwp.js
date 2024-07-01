/*

我@的@物@品

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/wanfc/rule/re/Wodewupin/wdwp.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/wanfc/rule/re/Wodewupin/wdwp.js

[mitm]
hostname = api.revenuecat.com

*/

const anni = {};
const anni1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const name = "Pro";
const appid = "1";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  anni.headers = $request.headers;
} else if (anni1 && anni1.subscriber) {
  anni1.subscriber.subscriptions = anni1.subscriber.subscriptions || {};
  anni1.subscriber.entitlements = anni1.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-12-31T09:09:09Z",
	"purchase_date": "2022-12-31T09:09:09Z"
	};
  anni1.subscriber.entitlements[(name)] = (data);
  anni1.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "anni",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  anni.body = JSON.stringify(anni1);
}

$done(anni);
