import React, { useContext } from 'react';
import thumb_up from '../../assets/images/thumb_up.svg';
import { Button } from '../../components/components/Button/Button';
import { ROUTES } from '../../navigation/routes';
import { KeyContext } from '../../context';

export const GameFinish = () => {

  const { awardAmount } = useContext(KeyContext);

  return (
    <div className="base-container">
      <div className="columns">
        <div className="image-holder">
          <img src={thumb_up} alt="thumb_up" width="" />
        </div>
        <div className="text-holder">
          <div>
            <h3 className="text-total">Total score: </h3>
            <h2>${awardAmount}&nbsp;earned</h2>
          </div>
          <Button text={'Try again'} path={ROUTES.GAME} />
        </div>
      </div>
      <div className="hexagon"> </div>
    </div>
  )
}