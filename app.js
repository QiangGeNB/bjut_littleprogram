//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  getUserInfo:function(){
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
              wx.setStorageSync('userinfo', res);
            }
          })
        }
      });
  },
  globalData:{
    userInfo:null
  }
})