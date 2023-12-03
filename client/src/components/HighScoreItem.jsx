import React from 'react';

export default function HighScoreItem({ highScore }) {
  return (
    <tr>
      <td>{highScore.username}</td>
      <td>{highScore.num_guesses}</td>
    </tr>
  )
}