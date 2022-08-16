const express = require('express');
const homeRouter = express.Router();
const { getCookieSettings } = require('../utils/get-cookie-settings');

homeRouter
    .get('/', (req, res) => {
        const {sum, extras, cookieBase, allBases, allExtras} = getCookieSettings(req);
        
        res.render('home/index', {
            cookie: {
                base: cookieBase,
                extras,
            },
            allBases: allBases,
            allExtras: allExtras,
            sum,
        });
    });

module.exports = {
    homeRouter,
};
