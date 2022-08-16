function getAddonsFromReq(req) {
    const {cookieExtras} = req.cookies;
    return cookieExtras ? JSON.parse(cookieExtras) : [];
}

module.exports = {
    getAddonsFromReq,
};