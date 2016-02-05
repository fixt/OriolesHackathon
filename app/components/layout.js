/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import wrapper from './wrapper';

import initialize from '../actions/initialize'

import GameStats from './game-stats'
import BattersBox from './batters-box'

import '../index.css';

class Layout extends Component {
  componentWillMount() {
    this.props.dispatch(initialize())
  }

  render() {
    const { guess } = this.props;
    return (
      <Page>
        <GameStats></GameStats>
        <BattersBox batSide='R' guess={guess}></BattersBox>
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
