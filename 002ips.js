const express = require('express');

const app = express();

const allowedIps = ['localhost', '127.0.0.1', '::1', '::ffff:127.0.0.1'];

app.get('/', (req) => {
  if (allowedIps.includes(req.ip)) {
    console.log('Hello, world!');
  } else {
    console.log('Access denied.');
  }
});

app.listen(3000);
