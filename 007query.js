const express = require('express');

const app = express();

// all parameter names and values
app.get('/', (req) => {
  console.log(req.query);
});

app.listen(3000);
