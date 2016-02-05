/* @flow */

import React, { Component } from 'react';
import batImg from '../assets/bat.png';

class Bat extends Component {
  render() {
    return (
      <img
        src={batImg}
        style={{
          height: '10em',
          width: '2em',
          zIndex: '1',
        }}
      />);
  }
}

export default Bat;
