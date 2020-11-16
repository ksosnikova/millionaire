import React from 'react';
import thumb_up from '../../assets/images/thumb_up.svg';
import { Button } from '../../components/components/Button/Button';
import { ROUTES } from '../../navigation/routes';

export const GameStart = () => {

  return (
    <div className="base-container start">
      <div className="columns">
        <div className="image-holder">
          <img src={thumb_up} alt="thumb_up" width="" />
        </div>
        <div className="text-holder">
          <h1>Who wants to&nbsp;be a&nbsp;millionaire?</h1>
          <Button text={'Start'} path={ROUTES.GAME} />
        </div>
      </div>
    </div>
  )
}