const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');

const filepath = './server/mastermind.db';

function createDbConnection() {
  return open({
    filename: filepath,
    driver: sqlite3.Database,
  })
    .then((db) => {
      console.log('SQLite connection established');
      createTable(db)
    })
    .catch((err) => console.error('DB Connection error: ', err));
  // const db = new sqlite3.Database(filepath, (err) =>{
  //   if (err) {
  //     return console.error(err.message);
  //   }
  //   createTable(db);
  // });
  // console.log('SQLite connection established');
  // return db;
}

function createTable(db) {
  const q = `
  CREATE TABLE IF NOT EXISTS games
  (
    id INTEGER PRIMARY KEY,
    answer TEXT NOT NULL,
    guesses BLOB,
    num_guesses INTEGER,
    username TEXT
  );
  `
  db.exec(q);
  // console.log('Table Created');
}

module.exports = createDbConnection();