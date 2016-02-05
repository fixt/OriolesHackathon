import { SELECT_PITCH } from './'

export default function nextPitch() {
  return (dispatch, getState) => {
    const { pitch, pitches } = getState()

    const nextPitch = findNextPitch(pitches, pitch)

    return dispatch(selectPitch(nextPitch))
  }
}

function findNextPitch(pitches, pitch) {
  pitches.sort(fieldSorter(['at_bat_number', 'pitch_number']))

  if(pitch == null) {
    return pitches[0]
  }

  const currentIndex = pitches.findIndex(p => p == pitch)
  const nextPitchIndex = parseInt(currentIndex) + 1

  return pitches[nextPitchIndex]
}

function selectPitch(pitch) {
  return {
    type: SELECT_PITCH,
    pitch
  }
}

function fieldSorter(fields) {
  return (a, b) => fields.map(o => {
    let dir = 1;
    if (o[0] === '-') { dir = -1; o=o.substring(1); }
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
  }).reduce((p,n) => p ? p : n, 0);
}
