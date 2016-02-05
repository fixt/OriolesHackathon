const { UPDATE_PATH } = require('redux-simple-router')

export default store => next => action => {
  const { type, ...rest } = action

  if (type === UPDATE_PATH) {
    
  }

  next(action)
}
