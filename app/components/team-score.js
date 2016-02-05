/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

class TeamScore extends Component {
  render() {
    return (
      <Box>
        <div style={{flex: 1, textAlign: 'center'}}>{this.props.team}</div>
        <div style={{flex: 1, textAlign: 'center', margin: 15}}>0</div>
      </Box>
    );
  }
}

const Box = wrapper({
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
});

export default TeamScore;
