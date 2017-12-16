import store from '../store/'

function isEmptyObject(obj) {
  for (var key in obj) {
    return false
  }
  return true
}

function Axios(option) {
  if (option.data) {
    option.data.accessToken = option.data.accessToken || store.state.accessToken
  } else {
    option.data = {
      accessToken: store.state.accessToken
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: option.url,
      data: option.data,
      method: option.method,
      header: {
        'content-type': option.header || 'application/json'
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (err) {
        console.log(err)
        reject(err)
      }
    })
  })
}

module.exports = {
  isEmptyObject,
  Axios
}