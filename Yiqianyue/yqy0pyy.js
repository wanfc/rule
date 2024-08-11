var body = $response.body.replace(/isVip":\w+/g,'isVip":true')
.replace(/vip_time":\d+/g,'vip_time":4092599349')
.replace(/vip_type":\d/g,'vip_type":1')
.replace(/vip_money":\d+/g,'vip_money":8888')
.replace(/money":\d+/g,'money":8888')
$done({ body });
