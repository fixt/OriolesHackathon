/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

class StrikeZone extends Component {
  render() {
    return (
      <Zone>
      </Zone>
    );
  }
}

const Zone = wrapper({
  display: 'flex',
  height: '50vh',
  width: '37.5vh',
  backgroundColor: "#000",
  border: '2px solid #fb4f14',
  opacity: 0.5,
  zIndex: '1',
});

export default StrikeZone;
