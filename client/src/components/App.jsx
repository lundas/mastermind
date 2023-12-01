import axios from 'axios';
import React, { useState } from 'react';
import GuessInput from './GuessInput';
import GuessHistoryList from './GuessHistoryList'

export default function App() {
  let [gameStarted, setGameStarted] = useState(false);
  let [gameId, setGameId] = useState(null);
  let [guessList, setGuessList] = useState([]);

  function startGame() {
    return axios.get('/api');
  }

  function makeGuess(gameId, guess) {
    return axios.post('/api', { gameId, guess });
  }

  return (
    <>
      <h1>MasterMind</h1>
      { gameStarted ? (
        <>
          <GuessInput
            gameId={gameId}
            makeGuess={makeGuess}
            guessList={guessList}
            setGuessList={setGuessList}
          />
          <GuessHistoryList guessList={guessList} />
        </>
      ) : (
        <>
          <form>
            <input name="username" placeholder="username"></input>
            <button type="button" onClick={(e) => {
              e.preventDefault();
              let username = document.querySelector('input').value || 'anon';
              console.log('username: ', username);
              setGameStarted(true);
              startGame()
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