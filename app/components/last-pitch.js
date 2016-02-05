/* @flow */

import React, { Component } from 'react';

import baseball from '../assets/baseball.png';

class LastPitch extends Component {
  render() {
    var x = 0, y = 0;
    return (
      <img
        src={baseball}
        style={{
          position: 'absolute',
          top: `calc(${y}px - 0.75em)`,
          left: `calc(${x}px - 0.75em)`,
          width: '1.5em',
          height: '1.5em',
          zIndex: 2,
          opacity: 0.5,
        }}
      />
    );
  }
}

export default LastPitch;
