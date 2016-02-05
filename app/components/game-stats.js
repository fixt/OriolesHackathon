/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

class GameStats extends Component {
  componentWillMount() {
  }

  handleSelection() {
  }

  render() {
    return (
      <Box>
      </Box>
    );
  }
}

const Box = wrapper({
  display: 'flex',
  height: '20vh',
  border: '2em solid #333',
  backgroundColor: '#eee',
  boxShadow: '0px 5px 0px #888',
  borderRadius: '6px',
});

export default GameStats;
