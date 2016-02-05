import { getPitchesByGame } from '../data'
import { PITCHES_LOADED } from './'
import actionErrorHandler from '../utils/action-error-handler'

export default function initialize() {
  return (dispatch) => {
    getPitchesByGame('2013/04/01/kcamlb-chamlb-1')
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
