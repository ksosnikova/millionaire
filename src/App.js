import React, { useState } from 'react';
import { Navigation } from './navigation';
import { KeyContext } from './context';
import './styles/styles.scss';

function App() {

  const [keyQuestion, setKeyQuestion] = useState(0);
  const [awardAmount, setAwardAmount] = useState(0);

  const increaseKeyQuestion = () => {
    setKeyQuestion(prev => prev + 1);
  }

  const resetKeyQuestion = () => {
    setKeyQuestion(0);
  }

  const setCurrentAwardAmount = (award) => {
    setAwardAmount(award);
  }

  return (
      <KeyContext.Provider value={{ keyQuestion, increaseKeyQuestion, resetKeyQuestion, awardAmount, setCurrentAwardAmount }}>
        <Navigation />
      </KeyContext.Provider>
  );
}

export default App;
