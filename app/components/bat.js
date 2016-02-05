/* @flow */

import React, { Component } from 'react';
import batImg from '../assets/bat.png';

class Bat extends Component {
  render() {
    return (
      <img
        src={batImg}
        style={{
          height: '40em',
          width: '8em',
          zIndex: '1',
        }}
      />);
  }
}

export default Bat;
