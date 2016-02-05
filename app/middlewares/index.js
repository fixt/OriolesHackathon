import logger from './logger'
import thunk from 'redux-thunk'

export default [
  mixpanel(),
  thunk,
  logger(),
]
