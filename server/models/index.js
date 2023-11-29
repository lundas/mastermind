const db = require('../db');

function createGame(answer) {
  const q = `INSERT INTO games (answer, guesses, num_guesses) VALUES (?, ?, ?)`;
  return db.then((db) => db.run(q, [answer, [], 0]));
}

function getAnswer(id) {
  const q = `SELECT answer FROM games WHERE id = ?`;
  return db.then((db) => db.get(q, id)); // id in Array?
}

//TODO
// create game function
//  returns row id
// make guess function

module.exports = { createGame, getAnswer }