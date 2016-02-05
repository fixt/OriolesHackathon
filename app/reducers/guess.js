import { createReducer } from '../utils';
import { GUESS } from '../actions';

export default createReducer({}, {
  [GUESS]: (state, { pageX, pageY }) => {
    return { pageX, pageY };
  }
});
