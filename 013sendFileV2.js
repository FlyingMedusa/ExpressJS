const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('img.webp', {
    root: __dirname,
  });
});

app.listen(3000);
