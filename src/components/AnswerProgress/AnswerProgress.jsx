import React, { useState, useEffect, useContext } from 'react';
import { KeyContext } from '../../context';

export const AnswerProgress = ({ index, award, currentIndex }) => {

  const { setCurrentAwardAmount } = useContext(KeyContext);

  const [className, setClassName] = useState('hexagon-wrap xs');

  const classToggle = () => {
    if (index === currentIndex) {
      setClassName(className + ' selected-style-2');
      setCurrentAwardAmount(award);
    }
    if (index < currentIndex) {
      setClassName('hexagon-wrap xs previous')
    }
  }

  useEffect(() => {
    classToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <li className={className}>
      <div className="hexagon">
        <span className="hexagon-inner">
          <span>${award.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
        </span>
      </div>
    </li>
  )
}
