const db = require('../db');

function createGame(answer) {
  const q = `INSERT INTO games (answer, guesses, num_guesses) VALUES (?, ?, ?)`;
  db.run(q, [answer, [], 0])
    .then((db) => console.log(`Inserted a row with ID: ${db}`))
    .catch((err) => console.error('createGame error: ', err));
  //   , function (err) {
  //   if (err) {
  //     console.error(err.message);
  //   }
  //   console.log(`Inserted a row with ID: ${this.lastID}`)
  // })
}

//TODO
// create game function
//  returns row id
// make guess function

module.exports = { createGame }