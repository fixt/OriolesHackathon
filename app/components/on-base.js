
/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

class OnBase extends Component {
  render() {
    let { inning, runneron1st_id, runneron2nd_id, runneron3rd_id, top_inning_sw } = this.props.currentPitch;

    return (
      <Box>
        <div style={{flex: 1, justifyContent: 'center', textAlign: 'center'}}>{top_inning_sw ? 'Top' : 'Bot'} {inning}</div>
        <div style={{display: 'flex', flex: 1, justifyContent: 'center', textAlign: 'center', margin: 25, fontSize: '2em'}}>
          <div style={{height: '30px', transform: 'rotate(45deg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '30px', border: '1px solid black'}}>
            <div style={{display: 'flex', flex:1, justifyContent: 'space-between'}}>
              <div style={{height: '5px', width: '5px', backgroundColor: runneron2nd_id != null ? 'black' : 'white', border: '1px solid black'}}></div>
              <div style={{height: '5px', width: '5px', backgroundColor: runneron2nd_id != null ? 'black' : 'white', border: '1px solid black'}}></div>
            </div>
            <div style={{display: 'flex', flex: 1, justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <div style={{height: '5px', width: '5px', backgroundColor: runneron3rd_id != null ? 'black' : 'white', border: '1px solid black'}}></div>
            </div>
          </div>
        </div>
      </Box>
    );
  }
}

const Box = wrapper({
  flex: 1,
});

export default OnBase;
