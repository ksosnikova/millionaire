import React, { useContext } from 'react';
import { Answer } from '../../components/components/Answer/Answer';
import { AnswerProgress } from '../../components/components/AnswerProgress/AnswerProgress';
import json from '../../json/qa.json';
import { KeyContext } from './../../context';

export const Game = () => {

  const { keyQuestion } = useContext(KeyContext);

  const list = json.arr;
  const lastQuestion = list.length - 1;
  const sortedList = list.sort((a, b) => a.award > b.award ? 1 : -1);

  return (
    <div className="game-holder">
      <div className="game-inner">
        <div className="question-area">
          <p className="question-title">{sortedList[keyQuestion].question}</p>
          <ul className="answers">
            {sortedList[keyQuestion].answers.map((item, index) =>
              <Answer {...item} key={index} keyQuestion={keyQuestion} lastQuestion={lastQuestion} />)}
          </ul>
        </div>
      </div>

      <input type="checkbox" id="menuToggle" className="menu-toggle" />
      <label htmlFor="menuToggle" className="menu-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="progress">
        <ul className="progress-list">
          {sortedList.map((item, index) =>
            <AnswerProgress key={index} index={index} {...item} currentIndex={keyQuestion} />)}
        </ul>

      </div>
    </div>
  )
}