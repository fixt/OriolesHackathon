/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import wrapper from './wrapper';

import initialize from '../actions/initialize'

import GameStats from './game-stats'
import BattersBox from './batters-box'
import Guess from './guess'
import LastPitch from './last-pitch'

import '../index.css';

class Layout extends Component {
  static defaultProps = {
    pitch: {},
    guest: {},
  };

  componentWillMount() {
    this.props.dispatch(initialize())
  }

  render() {
    const { guess, currentPitch, showLastPitch } = this.props;
    return (
      <Page>
        { guess.pageX ? <Guess x={guess.pageX} y={guess.pageY} /> : null }
        <LastPitch hidden={!showLastPitch} pitch={currentPitch}/>
        <GameStats currentPitch={currentPitch}></GameStats>
        <BattersBox
          batterSide={ currentPitch.bat_side }
          pitcherSide={ currentPitch.throws }
          guess={ guess }
        />
      </Page>
    );
  }
}

const Page = wrapper({
  display: 'flex',
  justifyContent: 'stretch',
  flex: 1,
  flexDirection: 'column',
  padding: '0.5em',
  height: '100vh',
  backgroundColor: '#fb4f14',
});

export default connect(state => state)(Layout)
