import loadPitches from './load-pitches'
import nextPitch from './next-pitch'
import actionErrorHandler from '../utils/action-error-handler'

export default function initialize() {
  return (dispatch) => {
    dispatch(loadPitches())
  }
}
