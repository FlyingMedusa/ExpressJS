const express = require('express');

class ConfigRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        this.router.get('/add-addon/:extrasName', this.addExtras);
        this.router.get('/delete-addon/:extrasName', this.deleteExtras);
    }

    selectBase = (req, res) => {
        const {baseName} = req.params;

        if (!this.cmapp.data.COOKIE_BASES[baseName]) {
            return res.render('error', {
                description: `Not on my watch!: A base named "${baseName}" doesn't exist.`
            });
        }

        res
            .cookie('cookieBase', baseName)
            .redirect('/');
    }

    addExtras = (req, res) => {
        const {extrasName} = req.params;

        if (!this.cmapp.data.COOKIE_ADDONS[extrasName]) {
            return res.render('error', {
                description: `Not on my watch!: An extra named "${extrasName}" doesn't exist.`
            });
        }

        const cookieExtras = this.cmapp.getAddonsFromReq(req);

        if (cookieExtras.includes(extrasName)) {
            return res.render('error', {
                description: `Not on my watch!: An extra ${extrasName} has already been added.`
            });
        }

        cookieExtras.push(extrasName);
        
        res
            .cookie('cookieExtras', JSON.stringify(cookieExtras))
            .redirect('/');
    }

    deleteExtras = (req, res) => {
        const {extrasName} = req.params;

        const oldExtras = this.cmapp.getAddonsFromReq(req);

        if (!oldExtras.includes(extrasName)) {
            return res.render('error', {
                description: `Not on my watch!: An extra named "${extrasName}" cannot be deleted as it should have been added in the first place.`
            });
        }

        const extras = oldExtras.filter(addon => addon !== extrasName);

        res
            .cookie('cookieExtras', JSON.stringify(extras))
            .redirect('/');
    }
}

module.exports = {
    ConfigRouter,
};
