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
        self.globalData.code = res.code;
        console.log('login success..');
        wx.getUserInfo({
          success: function (res) {
            console.log('getUserInfo success...');

            cb(res.userInfo);

            self.globalData.userInfo = res.userInfo;
            // 建立socket链接
            wx.connectSocket({
              url: "wss://www.helloeg.cn"
            });
            // 发送socket Message
            wx.onSocketOpen(function (res) {
              console.log("WebSocket链接已打开！");
              var message = new Object();
              message.code = self.globalData.code;
              message.data = self.globalData.userInfo;
              message.action = 'add';
              console.log("this is message:");
              console.log(message);
              wx.sendSocketMessage({
                data: JSON.stringify(message)
              });
            });
            // 将userinfo放入缓存
            wx.setStorage({
              key: 'userinfo',
              data: res.userInfo
            })

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
    if (Math.round(Rand * Range) == length) {
      return this.getRandom(array);
    }
    return Math.round(Rand * Range);
  },
  globalData: {
    userInfo: 123
  }
})