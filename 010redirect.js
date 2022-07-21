const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.get('/article/new', (req, res) => {
  res.send('Welcome!');
});

app.get('/news', (req, res) => {
  res.redirect('/article/new');
});

app.get('/:id', (req, res) => {
  res.redirect('https://google.com');
});

app.listen(3000);
