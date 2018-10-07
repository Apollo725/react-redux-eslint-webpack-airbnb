import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApiKey } from './container';

const RouteConfig = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <ApiKey />} />
      <Route path="/keys" component={ApiKey} />
    </Switch>
  </BrowserRouter>
);

export default RouteConfig;
