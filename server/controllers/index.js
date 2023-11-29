// todo: imports
const axios = require('axios');
const { createGame, getAnswer } = require('../models')

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
      console.log('getAnswer result: ', result)
      const guessEval = evaluateGuess(result.answer, req.body.guess)
      console.log('guessEval: ', guessEval);
    })
    .catch((err) => console.error(err))
  res.sendStatus(200);
  // get answer with game id found in req
  //  invoke model with get method
  // check answer against guess found in req
  //  utilize helper function to evaluate guess
  // increment guess count in db for game id
  // send response with obj with guess, numCorrect, locCorrect
}

function evaluateGuess(answer, guess) {
  let nums = 0;
  let locs = 0;
  const answerObj = {};

  answer = answer.split('\n');
  answer.pop(); // remove empty string at end of array

  answer.forEach((n, i) => answerObj[n] = i);

  for (let i = 0; i < guess.length; i++) {
    if (answerObj[guess[i]] !== undefined) {
      console.log('trigger check = true');
      nums++;
    }
    if (answerObj[guess[i]] === i) {
      locs++;
    }
  }

  return { guess, nums, locs };

  // convert answer to object -> nums as keys, indices as values
  // define vars nums, locs
  // for each value in guess
  //  1. check if key exists -> if yes, nums++
  //  2. if key exists, check index value -> if equal, locs++
  // return obj { guess, nums, locs }
}

module.exports = { initializeGame, makeGuess }