const express = require('express');

class HomeRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/', this.home);
    }

    home = (req, res) => {
        const {sum, extras, cookieBase, allBases, allExtras} = this.cmapp.getCookieSettings(req);
        
        res.render('home/index', {
            cookie: {
                base: cookieBase,
                extras,
            },
            allBases: allBases,
            allExtras: allExtras,
            sum,
        });
    }
}

module.exports = {
    HomeRouter,
};
