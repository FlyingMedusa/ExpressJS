const express = require('express');

const voteRouter = express.Router();

const votes = {
  yes: 0,
  no: 0,
};

voteRouter
  .get('/check', (req, res) => {
    const info = Object.entries(votes).map((ar) => `Votes on ${ar[0]}: ${ar[1]}`).join('<br>');
    res.send(info);
  })

  .get('/:voteName', (req, res) => {
    const { voteName } = req.params;
    if (typeof votes[voteName] === 'undefined') {
      votes[voteName] = 0;
    }
    votes[voteName]++;
    res.send('Thank you for your vote!');
  });

module.exports = {
  voteRouter,
};
