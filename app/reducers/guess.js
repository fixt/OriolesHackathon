import { createReducer } from '../utils';
import { USER_GUESSED } from '../actions';

export default createReducer({}, {
  [USER_GUESSED]: (state, {}) => {
    return { ...state };
  }
});
