import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/home';
import App from './containers/app';
import Otherpage from './components/otherpage';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/otherpage" component={Otherpage} />
  </Route>
)
