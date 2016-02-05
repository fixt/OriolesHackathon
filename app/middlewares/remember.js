import pick from 'lodash.pick'

export default (storage, key) => store => {
  function persist() {
    storage.setItem(key, JSON.stringify(get.getState()))
  }

  return next => action => {
    next(action)
    persist()
    return action
  }
}
