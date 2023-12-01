import React from 'react';

function GuessSelect({ name }) {
  return (
    <select name={name}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
  )
}

export default function GuessInput({
  gameId, makeGuess, guessList, setGuessList
}) {
  return(
    <div id="guess-input-container">
      <h3>Make Your Guess</h3>
      <GuessSelect name={'guess1'}/>
      <GuessSelect name={'guess2'}/>
      <GuessSelect name={'guess3'}/>
      <GuessSelect name={'guess4'}/>
      <button type="button" onClick={(e) => {
        e.preventDefault();
        let selectNodes = document.querySelectorAll('select');
        let guess = '';
        selectNodes.forEach((s) => guess += s.value);
        makeGuess(gameId, guess)
          .then((result) => setGuessList([...guessList, result.data]))
          .catch((err) => console.error('makeGuess error: ', err));
      }}>Submit</button>
    </div>
  )
}