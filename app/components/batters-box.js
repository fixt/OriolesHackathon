/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

import StrikeZone from './strike-zone';
import Bat from './bat';
import NoBat from './no-bat';

import fieldImage from '../assets/field.jpg';

class BattersBox extends Component {

  render() {
    const { batSide } = this.props;
    return (
      <Container>
        <img
          src={fieldImage}
          style={fieldStyle}
        />
          { batSide !== 'L' ? <Bat/> : <NoBat/> }
          <StrikeZone/>
          { batSide === 'L' ? <Bat/> : <NoBat/> }
      </Container>
    );
  }
}

const fieldStyle = {
  position: 'absolute',
  height: '100%',
  left: 0,
};

const Container = wrapper({
  position: 'relative',
  marginTop: '2em',
  height: '60vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 0.95,
  border: '2em solid #333',
  boxShadow: '0px 5px 0px #888',
  borderRadius: '6px',
  overflow: 'hidden',
});

export default BattersBox;
