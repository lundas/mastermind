require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { initializeGame, makeGuess, getHighScores } = require('./controllers')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));

app.post('/api/init', initializeGame);

app.post('/api', makeGuess);

app.get('/api', getHighScores);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})