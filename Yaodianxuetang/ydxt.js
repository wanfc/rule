var body = $response.body;
body = body.replace(/"open":\s*false/g, '"open":true');
body = body.replace(/"studyStatus":\s*0/g, '"studyStatus":-1');
$done({ body });
