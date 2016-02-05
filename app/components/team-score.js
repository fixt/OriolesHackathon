/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

class TeamScore extends Component {
  render() {
    return (
      <Box>
        <div style={{flex: 1, textAlign: 'center', fontSize: '2em'}}>Baltimore</div>
        <div style={{flex: 1, textAlign: 'center', margin: 15, fontSize: '4em'}}>5</div>
      </Box>
    );
  }
}

const Box = wrapper({
  flex: 1,
});

export default TeamScore;
