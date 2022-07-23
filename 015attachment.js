const express = require('express');
const { join } = require('path');

const app = express();

app.get('/', (req, res) => {
  res.attachment('dice.jpg', {
    root: join(__dirname, 'files'),
  });
  res.end();
});

app.listen(3000);
