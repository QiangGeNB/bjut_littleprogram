// pages/welcome/welcome.js
var app = getApp();
Page({
  data: {
    userName: "",
    userNameInput: ""
  },
  onLoad: function (options) {
    var self = this;
    if (wx.getStorageSync('userinfo') == "") {
      var user_info = app.getUserInfo(function (userinfo) {
        self.setData({
          userName: userinfo.nickName
        });
      });
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
    } else {
      var userinfo = wx.getStorageSync("userinfo");
      this.setData({
          userName: userinfo.nickName
      });
    }
  },
  jump: function () {
    wx.navigateTo({
      url: '/pages/index/index?userName=' + this.data.userName
    })
  },
  userNameInput: function(e){
    console.log(e.detail.value);
     this.setData({
       userName: e.detail.value
     });
  }
})