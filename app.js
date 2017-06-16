//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo: function (cb) {
    var self = this;
    wx.login({
      success: function (res) {
        console.log(res);
        wx.setStorageSync('code', res.code);
        console.log('login success..')
        wx.getUserInfo({
          success: function (res) {
            console.log('getUserInfo success...');
            console.log(res);
            cb(res.userInfo);
            self.globalData.userInfo = res.userInfo;
            wx.setStorageSync('userinfo', res.userInfo);
          }
        })
      }
    });
  },
  getRandom: function (array) {
    if (!typeof array == Array) {
      return;
    }
    var length = array.length;
    var Range = length;
    var Rand = Math.random();
    if(Math.round(Rand * Range) == length){
      return this.getRandom(array);
    }
    return Math.round(Rand * Range);
  },
  globalData: {
    userInfo: 123
  }
})