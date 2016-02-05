import { combineReducers } from 'redux';
import { routeReducer as routing } from 'redux-simple-router';

import guess from './guess'
import pitches from './pitches'
import currentPitch from './current-pitch'

export default combineReducers({
  routing,
  pitches,
  guess,
  currentPitch
});
