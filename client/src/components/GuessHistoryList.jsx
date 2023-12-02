import React from 'react';
import GuessHistoryItem from './GuessHistoryItem';

export default function GuessHistoryList({ guessList, setGameStarted }) {
  return(
    <div id="guess-history-container">
      <h2>Guess History</h2>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Remaining Guesses: {10 - guessList.length}</th>
          </tr>
          <tr>
           <th>Guess</th>
           <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {
            guessList.map((guess, i, arr) => (
              <GuessHistoryItem key={guess.guess+i} guess={guess} />
            ))
          }
          {
            guessList.length >= 10 &&
            <tr>
              <td colSpan="2">You've run out of guesses. Click End Game to try again.</td>
            </tr>
          }
        </tbody>
      </table>
      <button type="button" id="end-game-button" onClick={(e) => {
        e.preventDefault();
        setGameStarted(false);
      }}>End Game</button>
    </div>
  )
}