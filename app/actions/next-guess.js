import { GUESS } from './';

import nextPitch from './next-pitch'

export default function (e) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(nextPitch())
    }, 4000)

    dispatch({
      type: GUESS,
      pageX: e.clientX,
      pageY: e.clientY,
    })
  }
};
