const express = require('express');

const app = express();

app.use(express.json());
// app.useS can coexist with each other
app.use(express.static('public'));

app.post('/book', (req, res) => {
  console.log(req.body);
  res.json({
    text: `This is the ${req.body.edition} of ${req.body.name}`,
  });
});

app.listen(3000);
