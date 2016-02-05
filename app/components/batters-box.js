/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

import StrikeZone from './strike-zone';
import Bat from './bat';
import NoBat from './no-bat';

import fieldImage from '../assets/field.jpg';

class BattersBox extends Component {
  static propTypes = {
    batterSide: React.PropTypes.oneOf(['R', 'L']),
    pitcherSidet: React.PropTypes.oneOf(['R', 'L']),
  };

  render() {
    const { batterSide, guess } = this.props;

    return (
      <Container>
          { batterSide !== 'L' ? <Bat/> : <NoBat/> }
          <StrikeZone guess={guess}/>
          { batterSide === 'L' ? <Bat/> : <NoBat/> }
      </Container>
    );
  }
}

const Container = wrapper({
  position: 'relative',
  marginTop: '1em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 0.7,
  border: '0.5em solid #333',
  backgroundColor: '#eee',
  backgroundImage: `url(${fieldImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0px 0.2px 0px #888',
  borderRadius: '6px',
  overflow: 'hidden',
});

export default BattersBox;
