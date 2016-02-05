/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

import StrikeZone from './strike-zone';

class BattersBox extends Component {
  componentWillMount() {
  }

  handleSelection() {
  }

  render() {
    return (
      <Container>
        <StrikeZone/>
      </Container>
    );
  }
}

const Container = wrapper({
  position: 'absolute',
  bottom: '1em',
  width: 'calc(100vw - 20px - 4em)',
  height: '70vh',
  border: '2em solid #333',
  backgroundColor: '#eee',
  boxShadow: '0px 5px 0px #888',
  borderRadius: '6px',
});

export default BattersBox;
