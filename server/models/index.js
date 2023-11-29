const db = require('../db');

function createGame(answer) {
  const q = `INSERT INTO games (answer, guesses, num_guesses) VALUES (?, ?, ?)`;
  return db.then((db) => db.run(q, [answer, [], 0]));
}

//TODO
// create game function
//  returns row id
// make guess function

module.exports = { createGame }