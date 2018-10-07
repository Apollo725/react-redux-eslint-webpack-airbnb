import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle, faUserAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import RouteConfig from './routes';

library.add(faUserCircle);
library.add(faUserAlt);
library.add(faSignOutAlt);
class App extends Component {
  render() {
    return <RouteConfig />;
  }
}

export default App;
