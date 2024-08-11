var Q = JSON.parse($response.body);
Q.membership = true;
Q.lifetimeMembership = true;
$done({ body: JSON.stringify(Q) });
