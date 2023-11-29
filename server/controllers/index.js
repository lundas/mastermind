// todo: imports
const axios = require('axios');
const { createGame, getAnswer, incrementGuessCount } = require('../models')

function initializeGame(req, res) {
  // make call to random.org
  const baseUrl = 'https://www.random.org/integers/'
  axios.get(baseUrl, {
    params: {
      num: 4,
      min: 0,
      max: 7,
      col: 1,
      base: 10,
      format: 'plain',
      rnd: 'new',
    }
  })
    .then((result) => createGame(result.data))
    .then((db) => res.status(200).json({ gameId: db.lastID }))
    .catch((err) => {
      console.error('initGame err: ', err)
      res.sendStatus(500);
    });
}

function makeGuess(req, res) {
  console.log('makeGuess req: ', req.body);
  getAnswer(req.body.gameId)
    .then((result) => {
      const guessEval = evaluateGuess(result.answer, req.body.guess)
      incrementGuessCount(req.body.gameId);
      res.status(201).json({
        gameId: req.body.gameId,
        guess: req.body.guess,
        ...guessEval
      })
    })
    .catch((err) => {
      console.error('makeGuess error: ', err);
      res.sendStatus(500);
    })
}

function evaluateGuess(answer, guess) {
  let nums = 0;
  let locs = 0;
  let idx = -1;
  let val;

  const q = answer.split('\n');
  q.pop(); // remove empty string at end of array

  while (q.length) {
    val = q.shift();
    idx++;

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === val) {
        nums++
        if (i === idx) {
          locs++
        }
        guess[i] = -1;
        break;
      }
    }
  }

  return { nums, locs };
}

module.exports = { initializeGame, makeGuess }