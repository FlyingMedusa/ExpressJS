const express = require('express');
const { getCookieSettings } = require('../utils/get-cookie-settings');

const orderRouter = express.Router();

orderRouter
    .get('/summary', (req, res) => {
        const {sum, extras, cookieBase, allBases, allExtras} = getCookieSettings(req);
        
        res.render('order/summary', {
            cookie: {
                base: cookieBase,
                extras,
            },
            allBases: allBases,
            allExtras: allExtras,
            sum,
        });
    })
    .get('/thanks', (req, res) => {
        const {sum} = getCookieSettings(req);
        
        res
            .clearCookie('cookieBase')
            .clearCookie('cookieExtras')
            .render('order/thanks', {
                sum,
            });
    });

module.exports = {
    orderRouter,
};
