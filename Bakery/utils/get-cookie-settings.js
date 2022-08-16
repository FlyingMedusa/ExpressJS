const {handlebarsHelpers} = require('../utils/handlebars-helpers');
const {getAddonsFromReq} = require('../utils/get-addons-from-req');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookies-data");

function getCookieSettings(req) {
    const {cookieBase} = req.cookies;
    const extras = getAddonsFromReq(req);

    const allBases = Object.entries(COOKIE_BASES);
    const allExtras = Object.entries(COOKIE_ADDONS);

    const sum = (cookieBase ? handlebarsHelpers.findPrice(allBases, cookieBase) : 0)
        + extras.reduce((prev, curr) => (
            prev + handlebarsHelpers.findPrice(allExtras, curr)
        ), 0);

    return {
        // Selected stuff
        extras,
        cookieBase,

        // Total price
        sum,

        // All possibilities
        allBases,
        allExtras,
    }
}

module.exports = {
    getCookieSettings,
};