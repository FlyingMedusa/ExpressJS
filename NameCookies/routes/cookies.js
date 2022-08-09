const express = require('express');

const cookiesRouter = express.Router();

cookiesRouter
  .post('/set', (req, res) => {
    const { name } = req.body;
    res
      .cookie('name', name, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
      })
      .send('ok.');
  })
  .get('/show', (req, res) => {
    const { name } = req.cookies;
    res.render('layouts/show-cookie', {
      name,
    });
  })
  .get('/check', (req, res) => {
    const { name } = req.cookies;
    res.send(
      name === undefined ? 'No name was given.' : `A name ${name} has been provided.`,
    );
  });

module.exports = {
  cookiesRouter,
};
