const express = require('express');

const app = express();
// Content-Type should be application/json
app.use(express.json());

app.post('/book', (req, res) => {
  console.log(req.body);
  res.json({
    text: `This is the ${req.body.edition} of ${req.body.name}`,
  });
});

app.listen(3000);
