const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('express-handlebars');
const { homeRouter } = require('./routes/home');
const { orderRouter } = require('./routes/order');
const { configRouter } = require('./routes/configurator');
const {handlebarsHelpers} = require('./utils/handlebars-helpers');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true,
}));
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');
app.set("views", path.join(__dirname, "views"));

app.use('/', homeRouter);
app.use('/config', configRouter);
app.use('/order', orderRouter);

app.listen(3000, 'localhost');
