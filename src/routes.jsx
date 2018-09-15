import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Home, Error } from './layouts';
import { getBasepath } from './helpers';

// Note: We have to have a redirect due to SSO callback path
const Routes = () =>
  <Router basename={getBasepath()}>
    <Switch>
      <Route exact path="/pl/:page" component={Home} />
      <Redirect from="/*" to="/pl/basic" />
      <Redirect from="/callback" to="/" />
      <Route component={Error} />
    </Switch>
  </Router>;

export default Routes;
