import React from 'react';
import GuessHistoryItem from './GuessHistoryItem';

export default function GuessHistoryList({ guessList }) {
  return(
    <div id="guess-history-container">
      <h2>Guess History</h2>
      <table>
        <thead>
          <tr>
           <th>Guess</th>
           <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {
            guessList.map((guess, i) => (
              <GuessHistoryItem key={guess.guess+i} guess={guess} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}