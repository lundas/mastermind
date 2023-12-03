import React from 'react';
import HighScoreItem from './HighScoreItem';

export default function HighScoreList({ highScores, difficulty }) {
  const diffObj = {
    4: 'Easy',
    5: 'Medium',
    6: 'Hard'
  }
  return (
    <div id="high-score-list-container">
      <table>
        <thead>
          <tr>
            <th colSpan="2">High Scores: {diffObj[difficulty]}</th>
          </tr>
          <tr>
            <th>Username</th>
            <th>Number of Guesses</th>
          </tr>
        </thead>
        <tbody>
          { highScores.map((score, i) => (
            <HighScoreItem key={score.username+i} highScore={score} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}