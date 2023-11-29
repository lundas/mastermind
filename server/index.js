require('dotenv').config();
const express = require('express');
const { initializeGame, makeGuess } = require('./controllers')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', initializeGame);

app.post('/', makeGuess);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})