require('dotenv').config();
const { initializeGame } = require('./controllers')
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  initializeGame();
  res.status(200).send('Game Initialized')
})

app.post('/', (req, res) => {
  //TODO
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})