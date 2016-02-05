import { createReducer } from '../utils';
import { PITCHES_LOADED } from '../actions';

export default createReducer({}, {
  [PITCHES_LOADED]: (state, { pitches }) => {
    return pitches
  }
});

