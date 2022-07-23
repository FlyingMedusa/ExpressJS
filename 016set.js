const express = require('express');
const { join } = require('path');

const app = express();

app.get('/', (req, res) => {
  res
    .set({
      'X-studying-now': 'Yes',
    })
    .sendFile('dice.jpg', {
      root: join(__dirname, 'files'),
    });

  console.log(res.headersSent);
});

app.listen(3000);
