import React from 'react';
import { Button } from '../../components/Button/Button';
import { ROUTES } from '../../navigation/routes';

export const GameStart = () => {

  return (
    <div className="base-container start">
      <div className="columns">
        <div className="image-holder">
          <div className="image"/>
        </div>
        <div className="text-holder">
          <h1>Who wants to&nbsp;be a&nbsp;millionaire?</h1>
          <Button text={'Start'} path={ROUTES.GAME} />
        </div>
      </div>
    </div>
  )
}
