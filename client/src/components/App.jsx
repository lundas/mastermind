import axios from 'axios';
import React, { useState } from 'react';
import GuessInput from './GuessInput';
import GuessHistoryList from './GuessHistoryList'
import HighScoreList from './HighScoreList'

export default function App() {
  let [gameStarted, setGameStarted] = useState(false);
  let [gameId, setGameId] = useState(null);
  let [guessList, setGuessList] = useState([]);
  let [highScores, setHighScores] = useState([]);
  let [showHighScores, setShowHighScores] = useState(false);

  function startGame(username, difficulty) {
    return axios.post('/api/init', { username, difficulty });
  }

  function makeGuess(gameId, guess) {
    return axios.post('/api', { gameId, guess });
  }

  function getHighScores() {
    return axios.get('/api');
  }

  return (
    <>
      <h1>MasterMind</h1>
      <button
        type="button"
        id="show-highscores-button"
        onClick={(e) => {
          setShowHighScores(!showHighScores);
          if (highScores.length) {
            setHighScores([]);
          } else {
            getHighScores()
              .then((result) => {
                setHighScores(result.data);
              });
          }
        }}
      >{showHighScores ? 'Hide' : 'Show'} High Scores</button>
      { showHighScores && <HighScoreList highScores={highScores} /> }
      { gameStarted ? (
        <>
          <GuessInput
            gameId={gameId}
            makeGuess={makeGuess}
            guessList={guessList}
            setGuessList={setGuessList}
          />
          <GuessHistoryList
            guessList={guessList}
            setGameStarted={setGameStarted}
          />
        </>
      ) : (
        <>
          <form>
            <input name="username" placeholder="username"></input>
            <select name="difficulty">
              <option value="4">Easy</option>
              <option value="5">Medium</option>
              <option value="6">Hard</option>
            </select>
            <button type="button" onClick={(e) => {
              e.preventDefault();

              setGameStarted(true);
              if (guessList.length) {
                setGuessList([]);
              }

              let username = document.querySelector('input').value || 'anon';
              let difficulty = document.querySelector('select[name="difficulty"]').value;
              console.log('difficulty: ', difficulty);

              startGame(username, difficulty)
                .then((result) => {setGameId(result.data.gameId)})
                .catch((err) => console.error('startGame error: ', err));
            }}>Start Game</button>
          </form>
        </>
      )
    }
    </>
  )
}