/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import wrapper from './wrapper';

import initialize from '../actions/initialize'
import nextPitch from '../actions/next-pitch'

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

  getStarted() {
    this.props.dispatch(nextPitch())
  }

  render() {
    const { pitches, guess, currentPitch, showLastPitch, dispatch} = this.props;

    if(pitches.length == 0) {
      return <Page><h1>Loading</h1></Page>
    }

    if(currentPitch.sv_pitch_id == null || typeof currentPitch.sv_pitch_id == 'undefined') {
      return <Page><button onClick={ this.getStarted.bind(this) }>Get Started</button></Page>
    }

    return (
      <Page>
        { guess.pageX ? <Guess x={guess.pageX} y={guess.pageY} /> : null }
        <LastPitch hidden={!(guess.pageX)} pitch={currentPitch}/>
        <GameStats currentPitch={currentPitch}></GameStats>

        <BattersBox
          dispatch={dispatch}
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
