import { createReducer } from '../utils';
import { SELECT_PITCH } from '../actions';

export default createReducer({}, {
  [SELECT_PITCH]: (state, { pitch }) => {
    return pitch;
  }
});

