const db = require('../db');

function createGame(answer, username, difficulty) {
  const q = `INSERT INTO games (answer, username, num_guesses, answer_length, win) VALUES (?, ?, ?, ?, ?)`;
  return db.then((db) => db.run(q, [answer, username, 0, difficulty, 0]));
}

function getAnswer(id) {
  const q = `SELECT answer FROM games WHERE id = ?`;
  return db.then((db) => db.get(q, id)); // id in Array?
}

function incrementGuessCount(id) {
  const q = `UPDATE games SET num_guesses = num_guesses + 1 where id = ?`;
  return db.then((db) => db.run(q, [id]));
}

function updateWinColumn(id) {
  const q = `UPDATE games SET win = 1 WHERE id = ?`;
  return db.then((db => db.run(q, id)));
}

function getHighScoreList(difficulty) {
  const q = `
    SELECT username, num_guesses
    FROM games
    WHERE win = 1 AND answer_length = ? AND num_guesses > 0 AND num_guesses <= 10
    ORDER BY num_guesses ASC
    LIMIT 10
  `;
  return db.then((db) => db.all(q, difficulty));
}

module.exports = { createGame, getAnswer, incrementGuessCount, getHighScoreList, updateWinColumn }