import { createReducer } from '../utils';
import { USER_GUESSED } from '../action-types';

export default createReducer({}, {
  [USER_GUESSED]: (state, {}) => {
    return { ...state };
  }
});
