const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

const myCookies = function (req, res, next) {
  res
    .cookie('a-cookie', 'chocolate-one', {
      maxAge: 1000 * 60 * 60 * 24 * 3,
    })
    .cookie('scnd-cookie', 'vanilla-one', {
      maxAge: 1000 * 60 * 60 * 24 * 3,
    });
  next();
};

app.use(myCookies);
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('');
});

app.get('/getCookies', (req, res) => {
  console.log(req.cookies);
  res.send('Ok.');
});

app.get('/clearCookies', (req, res) => {
  res
    .clearCookie('a-cookie')
    .clearCookie('scnd-cookie')
    .send('Logged out.');
});

app.listen(3000);
