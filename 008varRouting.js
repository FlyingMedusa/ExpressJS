const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi!');
});

app.get('/article/new', (req, res) => {
  res.send('Welcome!');
});

app.get('/article/:articleName', (req, res) => {
  res.send('Well, Hello dear mushroom man!');
});

app.get('/:id/:title?', (req, res) => {
  res.json({
    id: req.params.id,
    content: 'Lorem ipsum dolor sit amet...',
  });
});

app.listen(3000);
