const express = require('express');
const { join } = require('path');

const app = express();

app.get('/', (req, res) => {
  res
    .cookie('a-cookie', 'chocolate-one')
    .cookie('scnd-cookie', 'vanilla-one')
    .send('Hello, World!');
});

app.listen(3000);
