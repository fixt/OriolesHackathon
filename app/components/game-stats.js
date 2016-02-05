/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

import TeamScore from './team-score';
import OnBase from './on-base';

class GameStats extends Component {
  componentWillMount() {
  }

  handleSelection() {
  }

  render() {
    return (
      <Box>
        <div style={{display: 'flex', flex: 1, flexDirection: 'column', height: '100%', width: '100%'}}>
          <div style={{paddingTop: '5px', display: 'flex', alignItems: 'stretch', flex: 0.5, flexDirection: 'row'}}>
            <TeamScore />
            <OnBase />
            <TeamScore />
          </div>
          <div style={{flex: 0.5, backgroundColor: 'yellow'}}>
          </div>
        </div>
      </Box>
    );
  }
}

const Box = wrapper({
  display: 'flex',
  flexDirection: 'column',
  flex: 0.4,
  border: '2em solid #333',
  backgroundColor: '#eee',
  boxShadow: '0px 0.2em 0px #888',
  borderRadius: '6px',
});

export default GameStats;
