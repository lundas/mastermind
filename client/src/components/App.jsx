import React from 'react';
import GuessInput from './GuessInput';
import GuessHistoryList from './GuessHistoryList'
import GuessCounter from './GuessCounter'

export default function App() {
  return (
    <>
      <h1>MasterMind</h1>
      <GuessInput />
      <GuessHistoryList />
      <GuessCounter />
    </>
  )
}