const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res
    .cookie('a-cookie', 'chocolate-one', {
      expires: new Date(2023, 11, 31),
      // REMEMBER
      httpOnly: true,
      secure: true,
    })
    .cookie('a-cookie-the-2nd', 'vanilla-one', {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: false,
    })
    .cookie('a-cookie-the-3rd', 'toffee-one', {
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })
    .send('Hello, World!');
});

app.get('/logout', (req, res) => {
  res
    .clearCookie('a-cookie-the-3rd')
    .send('Logged out.');
});

app.listen(3000);
