/* @flow */

import React, { Component } from 'react';

import baseball from '../assets/baseball.png';

class LastPitch extends Component {
  calculateCoordinates() {
    const { pitch } = this.props;
    const { plate_x, plate_z } = pitch;
    const zone = document.getElementById('strikezone').getBoundingClientRect();
    const centerX = zone.left + zone.width / 2;
    const zoneBottom = zone.bottom;
    const scale = (centerX - zone.left) * 12 / 8.5;
    const x = centerX + plate_x * scale;
    const y = zoneBottom - ((plate_z - 2) * scale);

    return { x, y };
  }

  render() {
    const { hidden } = this.props;
    if (hidden) {
      return null;
    }
    const { x, y } = this.calculateCoordinates();

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
