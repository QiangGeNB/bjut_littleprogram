// pages/welcome/welcome.js
var app = getApp();
Page({
  data: {
    userName: "",
    userNameInput: "",
    inputAnimationData: "",
    biyejiAnimationData: "",
    titleAnimationData:""
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



  onShow: function(){
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
      delay:2000
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