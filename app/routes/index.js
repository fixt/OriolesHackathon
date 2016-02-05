import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from '../components/layout'

export default (store) => (
  <Route path='/'>
    <IndexRoute component={ Layout } />
  </Route>
)
