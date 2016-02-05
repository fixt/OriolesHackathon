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
          <div style={{paddingTop: '5px', display: 'flex', alignItems: 'stretch', flex: 0.1, flexDirection: 'row'}}>
            <TeamScore />
            <OnBase />
            <TeamScore />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'center', flex: 1}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
              <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end'}}>
                <span style={labelStyle}>B</span>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
              </div>
              <div style={{display: 'flex', flex: 1, justifyContent: 'center'}}>
                <span style={labelStyle}>S</span>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
              </div>
              <div style={{display: 'flex', flex: 1, justifyContent: 'flex-start'}}>
                <span style={labelStyle}>O</span>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
                <div style={circleStyle}></div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

const labelStyle = {
  marginRight: '5px'
}

const circleStyle = {
  height: '10px',
  width: '10px',
  borderRadius: '10px',
  margin: '0 1px',
  border: '1px solid black'
}

const Box = wrapper({
  display: 'flex',
  flexDirection: 'column',
  flex: 0.25,
  border: '0.5em solid #333',
  backgroundColor: '#eee',
  boxShadow: '0px 0.2em 0px #888',
  borderRadius: '6px',
});

export default GameStats;
