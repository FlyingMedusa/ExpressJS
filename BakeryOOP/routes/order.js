const express = require('express');

class OrderRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/summary', this.summary);
        this.router.get('/thanks', this.thanks);
    }


    summary = (req, res) => {
        const {sum, extras, cookieBase, allBases, allExtras} = this.cmapp.getCookieSettings(req);
        
        res.render('order/summary', {
            cookie: {
                base: cookieBase,
                extras,
            },
            allBases: allBases,
            allExtras: allExtras,
            sum,
        });
    }

    thanks = (req, res) => {
        const {sum} = this.cmapp.getCookieSettings(req);
        
        res
            .clearCookie('cookieBase')
            .clearCookie('cookieExtras')
            .render('order/thanks', {
                sum,
            });
    }
}

module.exports = {
    OrderRouter,
};