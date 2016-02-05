/* @flow */

import React, { Component } from 'react';

import wrapper from './wrapper';

const zoneTable = {
  L: {
       00: 3.40,
       01: 2.75,
       02: 2.38,
       10: 3.43,
   11:  3.00,
   12:  2.53,
   20:  3.55
   21:  3.10
   22:  2.92
   30:  3.70
   31:  3.22
   32:  2.87
     },
  R: {
     }
}

const calculateDimensions = (strikes, balls, batSide) => {

 0-0  3.40  3.49
   0-1  2.75  2.89
   0-2  2.38  2.39
   1-0  3.43  3.52
   1-1  3.00  3.07
   1-2  2.53  2.43
   2-0  3.55  3.63
   2-1  3.10  3.21
   2-2  2.92  2.88
   3-0  3.70  3.73
   3-1  3.22  3.36
   3-2  2.87  2.97
};

const calculateWidth = (count)

class StrikeZone extends Component {
  render() {
    return (
      <Zone>
      </Zone>
    );
  }
}

const Zone = wrapper({
  position: 'absolute',
  height: '400px',

});

export default StrikeZone;
