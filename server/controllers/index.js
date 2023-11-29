// todo: imports
const axios = require('axios');
const { createGame } = require('../models')

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
    .then((result) => {
      // add result data to db
      // send 200 reponse with rowid
      console.log('initGame result: ', result.data)
      createGame(result.data);
      res.status(200).json({ gameId: null })
    })
    .catch((err) => {
      console.error('initGame err: ', err)
      res.sendStatus(500);
    });
}

module.exports = { initializeGame }