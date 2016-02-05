import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import Guess from './guess'

export default combineReducers({
  routing,
  Guess
});
