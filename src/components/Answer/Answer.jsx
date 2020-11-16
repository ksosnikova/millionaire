import React, { useState, useContext, useEffect } from 'react';
import { KeyContext } from '../../context';
import { useHistory } from 'react-router-dom';

export const Answer = ({ answerOption, answer, isCorrect, lastQuestion }) => {

  const history = useHistory();

  let { keyQuestion, increaseKeyQuestion, resetKeyQuestion } = useContext(KeyContext);

  const [className, setClassName] = useState('hexagon-wrap md');

  useEffect(() => {
    setClassName('hexagon-wrap md');
  }, [keyQuestion])

  const checkAnswer = (answer) => {

    if (isCorrect === true) {
      setClassName(className + ' success');
      if (keyQuestion !== lastQuestion) {
        setTimeout(() => increaseKeyQuestion(), 1000);
      } else {
        history.push("/finish");
        resetKeyQuestion();
      }
    } else {
      setClassName(className + ' danger');
      setTimeout(() => {
        history.push("/finish");
        resetKeyQuestion()
      }, 1000);
    }
  }

  return (

    <li className={className}
      onClick={() => {
        setClassName(className + ' selected');
        setTimeout(() => { checkAnswer(answer) }, 1000);
      }}>
      <div className="hexagon">
        <span className="hexagon-inner">
          <span className="answer-option">{answerOption}</span>
          <span>{answer}</span>
        </span>
      </div>
    </li>

  );
}
