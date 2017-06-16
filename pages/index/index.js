var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
    var user_info = app.getUserInfo();
    wx.connectSocket({
      url: "wss://www.helloeg.cn"
      //url: "ws://192.168.0.100:8090"
    });
    wx.onSocketOpen(function (res) {
      console.log("WebSocket链接已打开！");
      var message = new Object();
      message.code = wx.getStorageSync('code');
      message.data = wx.getStorageSync('userinfo').userInfo;
      message.action = 'add';
      wx.sendSocketMessage({
        data: JSON.stringify(message)
      });
    });
  }
})
