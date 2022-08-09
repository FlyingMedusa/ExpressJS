const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const hbs = require('express-handlebars');
const { cookiesRouter } = require('./routes/cookies');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({
  extended: true,
}));
app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.use('/cookie', cookiesRouter);
app.get('/jc', (req, res) => {
  res.render('home', {});
});

app.listen(3000, 'localhost');
