import React from 'react';
import axios from 'axios';

export default function GuessHistoryItem({ guess }) {
  let lString = guess.locations === 1 ? 'location' : 'locations';
  let nString = guess.numbers === 1 ? 'number' : 'numbers';
  let feedback

  function recordWin(gameId) {
    return axios.post('/api/win', { gameId })
  }

  if (guess.numbers === 0) {
    feedback = 'All incorrect'
  } else if (guess.locations === guess.guess.length) {
    feedback = 'All correct. You Win!'
    recordWin(guess.gameId);
  } else {
    feedback = `
      ${guess.numbers} correct ${nString} and ${guess.locations} correct ${lString}
    `
  }

  return (
    <tr>
      <td>{guess.guess}</td>
      <td>{feedback}</td>
    </tr>
  )
}