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

  handleSelection() {
  }

  render() {
    return (
      <Page>
        <GameStats></GameStats>
        <BattersBox batSide='R'></BattersBox>
      </Page>
    );
  }
}

const Page = wrapper({
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,
  flexDirection: 'column',
  padding: 10,
  height: '100vh',
  backgroundColor: '#fb4f14',
});

export default connect()(Layout)
