const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to this miserable calculator. Give two numbers as sequential parts of the path and I will add them.');
});

app.get('/:num1/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const sum = Number(num1) + Number(num2);
  res.send(`${sum}`);
});

app.listen(3000);
