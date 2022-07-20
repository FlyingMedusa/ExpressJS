const express = require('express');

const app = express();

app.all('/', (req) => {
  console.log(req.method);
});

app.listen(3000);
