if ($request.url.includes('v1/user/current')) {
    let body = JSON.parse($response.body);
    Object.assign(body.data, { isVip: "true", vipType: "yearly", vipDeadline: "9999-09-06T06:06:06Z" });
    $done({ body: JSON.stringify(body) });
} else {
    $done({});
}
