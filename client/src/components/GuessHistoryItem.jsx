import React from 'react';

export default function GuessHistoryItem({ guess }) {
  let lString = guess.locs === 1 ? 'location' : 'locations';
  let nString = guess.nums === 1 ? 'number' : 'numbers';
  let feedback

  if (guess.nums === 0) {
    feedback = 'All incorrect'
  } else if (guess.nums === guess.guess.length && guess.locs === guess.guess.length) {
    feedback = 'You Win!'
  } else {
    feedback = `
      ${guess.nums} correct ${nString} and ${guess.locs} correct ${lString}
    `
  }

  return (
    <tr>
      <td>{guess.guess}</td>
      <td>{feedback}</td>
    </tr>
  )
}