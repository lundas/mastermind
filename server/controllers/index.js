// todo: imports
const axios = require('axios');

function initializeGame(
  num = 4, min = 0, max = 7, col = 1, base = 10, format = 'plain', rnd = 'new'
) {
  // make call to random.org
  const baseUrl = 'https://www.random.org/integers/'
  axios.get(baseUrl, {
    params: {
      num: num,
      min: min,
      max: max,
      col: col,
      base: base,
      format: format,
      rnd: rnd,
    }
  })
    .then((result) => console.log('initGame result: ', result.data))
    .catch((err) => console.error('initGame err: ', err));
  // insert line into db with response from random.org
  // invoke model to insert
  // return
}

module.exports = { initializeGame }