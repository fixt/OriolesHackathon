import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import Guess from './guess'
import pitches from './pitches'

export default combineReducers({
  routing,
  pitches,
  Guess
});
