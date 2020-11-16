import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { ROUTES } from './routes';
import { GameFinish } from '../pages/GameFinish/index';
import { GameStart } from '../pages/GameStart/index';
import { Game } from '../pages/Game/index';

export const Navigation = () => (
  <Router>
    <Switch>
      <Route path={ROUTES.START} exact>
        <GameStart />
      </Route>
      <Route path={ROUTES.GAME}>
        <Game />
      </Route>
      <Route path={ROUTES.FINISH}>
        <GameFinish />
      </Route>
      <Redirect to={ROUTES.START} />
    </Switch>
  </Router>
) 