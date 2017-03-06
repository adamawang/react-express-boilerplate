import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, hashHistory } from 'react-router';
import promise from 'redux-promise';
import routes from './routes';
import reducer from './reducers/reducer';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
, document.getElementById('app'));
