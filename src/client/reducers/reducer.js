import { combineReducers } from 'redux';

import HomeReducer from './home-reducer'

const rootReducer = combineReducers({
  home: HomeReducer,
});


export default rootReducer;
