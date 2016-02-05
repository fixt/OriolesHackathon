import { getPitchesByGame } from '../data'
import { PITCHES_LOADED } from './'

import actionErrorHandler from '../utils/action-error-handler'

export default function loadPitches(id = '2013/04/01/kcamlb-chamlb-1') {
  return (dispatch) => {
    return getPitchesByGame()
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
