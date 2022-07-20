const express = require('express');

const app = express();

app.post('/noice', (req) => {
  console.log(req.protocol === 'https');
  // same as:
  console.log(req.secure);
});

app.listen(3000);
