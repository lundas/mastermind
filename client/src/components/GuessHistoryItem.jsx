import React from 'react';

export default function GuessHistoryItem({ guess }) {
  let lString = guess.locations === 1 ? 'location' : 'locations';
  let nString = guess.numbers === 1 ? 'number' : 'numbers';
  let feedback

  if (guess.numbers === 0) {
    feedback = 'All incorrect'
  } else if (guess.locations === guess.guess.length) {
    feedback = 'All correct. You Win!'
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