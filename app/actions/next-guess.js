import { GUESS } from './';

export default function (e) {
  return {
    type: GUESS,
    pageX: e.clientX,
    pageY: e.clientY,
  }
};
