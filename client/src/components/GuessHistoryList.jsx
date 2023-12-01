import React from 'react';
import GuessHistoryItem from './GuessHistoryItem';

export default function GuessHistoryList({ guessList }) {
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
        </tbody>
      </table>
      <button type="button" onClick={(e) => console.log('End Game Clicked')}>End Game</button>
    </div>
  )
}