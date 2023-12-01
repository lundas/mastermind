import React from 'react';

export default function GuessCounter({ guessCount }) {
  return(
    <div id="guess-counter-container">
      <h2>Remaining Guesses</h2>
      <h3>{10 - guessCount}</h3>
    </div>
  )
}