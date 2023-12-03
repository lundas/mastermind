const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const filepath = './server/mastermind.db';

async function createDbConnection() {
  const db = await open({
    filename: filepath,
    driver: sqlite3.Database,
  })
    .then((db) => {
      console.log('SQLite connection established');
      createTable(db)
      return db;
    })
    .catch((err) => console.error('DB Connection error: ', err));

  return db;
}

function createTable(db) {
  const q = `
  CREATE TABLE IF NOT EXISTS games
        (
          id INTEGER PRIMARY KEY,
          answer TEXT NOT NULL,
          num_guesses INTEGER,
          username TEXT,
          answer_length INTEGER,
          win INTEGER
        );
      `
  db.exec(q);
  // console.log('Table Created');
}

module.exports = createDbConnection();