const express = require('express');
const { COOKIE_BASES, COOKIE_ADDONS } = require('../data/cookies-data');
const configRouter = express.Router();
const {getAddonsFromReq} = require("../utils/get-addons-from-req");

configRouter
    .get('/select-base/:baseName', (req, res) => {
        const {baseName} = req.params;

        if (!COOKIE_BASES[baseName]) {
            return res.render('error', {
                description: `Not on my watch!: A base named "${baseName}" doesn't exist.`
            });
        }

        res
            .cookie('cookieBase', baseName)
            .redirect('/');
    })
    .get('/add-addon/:extrasName', (req, res) => {
        const {extrasName} = req.params;

        if (!COOKIE_ADDONS[extrasName]) {
            return res.render('error', {
                description: `Not on my watch!: An extra named "${extrasName}" doesn't exist.`
            });
        }

        const cookieExtras = getAddonsFromReq(req);

        if (cookieExtras.includes(extrasName)) {
            return res.render('error', {
                description: `Not on my watch!: An extra ${extrasName} has already been added.`
            });
        }

        cookieExtras.push(extrasName);
        
        res
            .cookie('cookieExtras', JSON.stringify(cookieExtras))
            .redirect('/');
    })
    .get('/delete-addon/:extrasName', (req, res) => {
        const {extrasName} = req.params;

        const oldExtras = getAddonsFromReq(req);

        if (!oldExtras.includes(extrasName)) {
            return res.render('error', {
                description: `Not on my watch!: An extra named "${extrasName}" cannot be deleted as it should have been added in the first place.`
            });
        }

        const extras = oldExtras.filter(addon => addon !== extrasName);

        res
            .cookie('cookieExtras', JSON.stringify(extras))
            .redirect('/');
    });

module.exports = {
    configRouter,
};
