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
  backgroundColor: "#00ff00",
});

export default StrikeZone;
