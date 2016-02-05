/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import wrapper from './wrapper';

import GameStats from './game-stats'
import BattersBox from './batters-box'

import '../index.css';

class Layout extends Component {
  componentWillMount() {
  }

  handleSelection() {
  }

  render() {
    return (
      <Page>
        <GameStats></GameStats>
        <BattersBox></BattersBox>
      </Page>
    );
  }
}

const Page = wrapper({
  flex: 1,
  padding: 10,
  height: '100vh'
});

export default connect()(Layout)
