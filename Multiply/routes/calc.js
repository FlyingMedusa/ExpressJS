const express = require('express');

const calcRouter = express.Router();

calcRouter.post('/check', (req, res) => {
  const { numA, numB } = req.body;

  const divider = numA % numB === 0;

  res.json({ divider });
});

module.exports = {
  calcRouter,
};
