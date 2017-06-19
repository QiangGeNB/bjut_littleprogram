// pages/welcome/welcome.js
var app = getApp();
Page({
  data: {
    userName: "",
    userNameInput: "",
    inputAnimationData: "",
    biyejiAnimationData: "",
    titleAnimationData: ""
  },
  onLoad: function (options) {
    var self = this;
    //若缓存中没有user信息，则请求得到user信息之后将发送给服务器
    if (wx.getStorageSync('userinfo') == "") {
      console.log('没有userinfo...');
      var user_info = app.getUserInfo(function (userinfo) {
        self.setData({
          userName: userinfo.nickName
        });
      });
    } else {
      var userinfo = wx.getStorageSync("userinfo");
      this.setData({
        userName: userinfo.nickName
      });
    }
  },

  sendMessage: function () {
    // 建立socket链接
    wx.connectSocket({
      url: "wss://www.helloeg.cn"
    });
    // 发送socket Message
    wx.onSocketOpen(function (res) {
      console.log("WebSocket链接已打开！");
      var message = new Object();
      message.code = wx.getStorageSync('code');
      message.data = wx.getStorageSync('userinfo').userInfo;
      message.action = 'add';
      console.log("this is message:");
      console.log(message);
      wx.sendSocketMessage({
        data: JSON.stringify(message)
      });
    });
  },
  onShow: function () {
    var biyejiAnimationData = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease"
    });
    var titleAnimationData = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 1000
    });
    var inputAnimationData = wx.createAnimation({
      duration: 2500,
      timingFunction: "ease",
      delay: 2000
    });

    this.biyejiAnimationData = inputAnimationData;
    biyejiAnimationData.opacity(1).step();
    this.titleAnimationData = inputAnimationData;
    titleAnimationData.opacity(1).step();
    this.inputAnimationData = inputAnimationData;
    inputAnimationData.opacity(1).step();

    this.setData({
      biyejiAnimationData: biyejiAnimationData,
      titleAnimationData: titleAnimationData,
      inputAnimationData: inputAnimationData
    })
  },

  jump_fun: function () {
    wx.navigateTo({
      url: '/pages/index/index?userName=' + this.data.userName
    })
  },
  userNameInput: function (e) {
    console.log(e.detail.value);
    this.setData({
      userName: e.detail.value
    });
  }
})