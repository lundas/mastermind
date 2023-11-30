import React from 'react';
import GuessHistoryItem from './GuessHistoryItem';

export default function GuessHistoryList() {
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
          <GuessHistoryItem />
        </tbody>
      </table>
    </div>
  )
}