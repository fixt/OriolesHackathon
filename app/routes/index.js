import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from '../components/layout'
import UI from '../components/ui'


export default (store) => (
  <Route path='/'>
    <Route component={ Layout }>
      <IndexRoute component={ UI } />
    </Route>
  </Route>
)
