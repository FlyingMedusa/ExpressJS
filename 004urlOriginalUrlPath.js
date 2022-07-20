const express = require('express');

const app = express();

app.post('/noice', (req) => {
  const { url, originalUrl, path } = req;
  console.log({ url, originalUrl, path });
});

app.listen(3000);
