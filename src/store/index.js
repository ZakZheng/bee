// import Store from './store'
// To support wepy
import deepclone from '../utils/deepclone'

class Store {
  constructor(state = {}) {
    this.state = deepclone(state)
  }

  mutate(fn) {
    this.state = Object.assign(this.state, deepclone(
      fn(
        deepclone(this.state)
      )
    ))
  }
}

module.exports = new Store({
  accessToken: '',
  currentNumber: 0,
  dishesNumber: 0,
  operatingInfo: {},
  carList: []
})
