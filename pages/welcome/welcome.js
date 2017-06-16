// pages/welcome/welcome.js
var app = getApp();
Page({
  data: {
    userName: ""
  },

  onLoad: function (options) {
    var user_info = app.getUserInfo();
    var userinfo = wx.getStorageSync('userinfo').userInfo;
    this.setData({
      userName: userinfo.nickName
    });
    console.log(userinfo);
    wx.connectSocket({
      url: "wss://www.helloeg.cn"
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
  },
  jump: function(){
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})