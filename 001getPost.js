const express = require('express');

const app = express();

app.get('/', () => {
  console.log('Hi!');
});

app.post('/', () => {
  console.log('Hello!');
});

app.get('/bye', () => {
  console.log('Goodbye!');
});

app.listen(3000);
