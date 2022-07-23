const express = require('express');
const { readFile, writeFile } = require('fs').promises;

const app = express();

app.get('/name/set/:name', async (req, res) => {
  const { name } = req.params;
  await writeFile('files/name.txt', name, 'utf8');
  res.send(name);
});

app.get('name/show', async (req, res) => {
  const name = await readFile('files/name.txt', 'utf8');
  res.send(name);
});

app.get('name/check', async (req, res) => {
  try {
    await readFile('files/name.txt');
    res.send('A name has already been saved.');
  } catch (e) {
    res.send('No name has been saved yet.');
  }
});

app.listen(3000);
