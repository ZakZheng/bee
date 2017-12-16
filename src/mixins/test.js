import wepy from 'wepy'

export default class testMixin extends wepy.mixin {
  onLoad(options) {
    if (options.query) {
      var id = options.query
      console.log(id)
    } else {
      console.log(6)
    }
  }
}
