import React from 'react';

export default function GuessHistoryItem({ guess }) {
  let lString = guess.locs === 1 ? 'location' : 'locations';
  let nString = guess.nums === 1 ? 'number' : 'numbers';
  let feedback

  if (guess.nums === 0) {
    feedback = 'All incorrect'
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