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
    .then((result) => createGame(result.data, req.body.username))
    .then((db) => res.status(201).json({ gameId: db.lastID }))
    .catch((err) => {
      console.error('initGame err: ', err)
      res.sendStatus(500);
    });
}

function makeGuess(req, res) {
  // console.log('makeGuess req: ', req.body);
  getAnswer(req.body.gameId)
    .then((result) => {
      incrementGuessCount(req.body.gameId);
      const guessEval = evaluateGuess(result.answer, req.body.guess)
      res.status(200).json({
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
  let numbers = 0;
  let locations = 0;
  let q = [];

  answer = answer.split('\n');
  answer.pop() // remove empty str created by split
  let answerRefArr = new Array(8); // needs to reflect max number value + 1

  guess = guess.split('');

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === guess[i]) {
      locations++
    } else {
      q.push(guess[i]);
      answerRefArr[answer[i]] = answerRefArr[answer[i]] ? answerRefArr[answer[i]] += 1 : 1;
    }
  }

  while (q.length) {
    let val = q.shift();
    if (answerRefArr[val] > 0) {
      numbers++;
      answerRefArr[val]--;
    }
  }

  numbers += locations;

  return { numbers, locations };
}

module.exports = { initializeGame, makeGuess }