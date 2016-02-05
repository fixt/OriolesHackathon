import { createReducer } from '../utils';
import { GUESS, SELECT_PITCH } from '../actions';

export default createReducer({}, {
  [GUESS]: (state, { pageX, pageY }) => {
    return { pageX, pageY }
  },
  [SELECT_PITCH]: (state, { pitch }) => {
    return {}
  },
});
