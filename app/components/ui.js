/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class UI extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <div style={{
        width: '40vw',
        height: '50vh',
        backgroundColor: 'red',
      }}>
      </div>
    )
  }
}

export default connect()(UI)
