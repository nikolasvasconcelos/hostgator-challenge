import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import { ROUTE } from './RoutesMapper';

const RoutesProvider = () => {
  return (
    <Switch>
      <Route exact path={ROUTE.HOME.PATH} component={Home} />
      <Redirect from="/" to={ROUTE.HOME.PATH} />
    </Switch>
  );
};

export default RoutesProvider;
