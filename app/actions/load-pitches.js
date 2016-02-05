import { getPitchesByGame } from '../data'
import { PITCHES_LOADED } from './'

import actionErrorHandler from '../utils/action-error-handler'

export default function loadPitches(id = '2013/04/02/balmlb-tbamlb-1') {
  return (dispatch) => {
    return getPitchesByGame(id)
      .then(({ pitches }) => dispatch(pitchesLoaded(pitches)))
      .catch(actionErrorHandler)
  }
}

function pitchesLoaded(pitches) {
  return {
    type: PITCHES_LOADED,
    pitches
  }
}
