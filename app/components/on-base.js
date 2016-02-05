
/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

class OnBase extends Component {
  render() {
    return (
      <Box>
        <div style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>Bot 1st</div>
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', textAlign: 'center', margin: 25, fontSize: '2em'}}>
          <div style={{height: '40px', transform: 'rotate(45deg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '40px', border: '1px solid black'}}>
            <div style={{display: 'flex', flex:1, justifyContent: 'space-between'}}>
              <div style={{height: '5px', width: '5px', backgroundColor: 'black', border: '1px solid black'}}></div>
              <div style={{height: '5px', width: '5px', backgroundColor: 'black', border: '1px solid black'}}></div>
            </div>
            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <div style={{height: '5px', width: '5px', backgroundColor: 'black', border: '1px solid black'}}></div>
              <div style={{height: '5px', width: '5px', backgroundColor: 'black', border: '1px solid black'}}></div>
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

const Box = wrapper({
  flex: 1,
  backgroundColor: 'blue'
});

export default OnBase;
