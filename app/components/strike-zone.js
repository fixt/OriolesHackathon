/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import nextGuess from '../actions/next-guess';
import nextPitch from '../actions/next-pitch';

import wrapper from './wrapper';

class StrikeZone extends Component {
  constructor(props) {
    super(props);
    this.guess = this.guess.bind(this)
  }
  guess(e) {
    this.props.dispatch(nextGuess(e));
    //this.props.dispatch(nextPitch());
  }
  render() {
    return (
      <Zone
        onClick={this.guess}
      >
        <Strike id="strikezone" />
      </Zone>
    );
  }
}

const Zone = wrapper({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40vh',
  width: '37.5vh',
  backgroundColor: "#000",
  border: '2px solid #fb4f14',
  opacity: 0.5,
  zIndex: '1',
});

const Strike = wrapper({
  width: '60%',
  height: '60%',
  border: '2px solid #ffff00'
});

export default connect()(StrikeZone);
