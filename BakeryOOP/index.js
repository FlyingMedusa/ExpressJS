const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('express-handlebars');
const { HomeRouter } = require('./routes/home');
const { OrderRouter } = require('./routes/order');
const { ConfigRouter } = require('./routes/configurator');
const {handlebarsHelpers} = require('./utils/handlebars-helpers');
const { COOKIE_BASES, COOKIE_ADDONS } = require('./data/cookies-data');

class CookieMakerApp {
    constructor() {
        this._loadData();
        this._configureApp();
        this._setRoutes();
        this._run();
    }

    _loadData() {
        this.data = {
            COOKIE_BASES,
            COOKIE_ADDONS,
        };
    }

    _configureApp() {
        this.app = express();

        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(cookieParser());
        this.app.use(express.urlencoded({
            extended: true,
        }));
        this.app.engine('.hbs', hbs.engine({
            extname: '.hbs',
            helpers: handlebarsHelpers,
        }));
        this.app.set('view engine', '.hbs');
        this.app.set("views", path.join(__dirname, "views"));
    }

    _setRoutes() {
        this.app.use('/', new HomeRouter(this).router);
        this.app.use('/config', new ConfigRouter(this).router);
        this.app.use('/order', new OrderRouter(this).router);
    }

    _run() {
        this.app.listen(3000, 'localhost');
    }

    getAddonsFromReq(req) {
        const {cookieExtras} = req.cookies;
        return cookieExtras ? JSON.parse(cookieExtras) : [];
    }

    getCookieSettings(req) {
        const {cookieBase} = req.cookies;
        const extras = this.getAddonsFromReq(req);
    
        const allBases = Object.entries(this.data.COOKIE_BASES);
        const allExtras = Object.entries(this.data.COOKIE_ADDONS);
    
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
    

}

new CookieMakerApp();