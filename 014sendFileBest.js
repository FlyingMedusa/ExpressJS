const express = require('express');
const { join } = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('img.webp', {
    // security reasons
    root: join(__dirname, 'files'),
    // extras
    headers: {
      'X-Best-JS-Code': 'Course',
    },
  });
});

app.listen(3000);
