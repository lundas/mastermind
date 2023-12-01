require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { initializeGame, makeGuess } = require('./controllers')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api', initializeGame);

app.post('/api', makeGuess);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})