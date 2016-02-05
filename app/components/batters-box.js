/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

import StrikeZone from './strike-zone';
import Bat from './bat';

class BattersBox extends Component {

  render() {
    const { batSide } = this.props;
    return (
      <Container>
        { batSide === 'L' ? <Bat/> : null }
        <StrikeZone/>
        { batSide !== 'L' ? <Bat/> : null }
      </Container>
    );
  }
}

const Container = wrapper({
  marginTop: '2em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 0.95,
  border: '2em solid #333',
  backgroundColor: '#eee',
  boxShadow: '0px 5px 0px #888',
  borderRadius: '6px',
});

export default BattersBox;
