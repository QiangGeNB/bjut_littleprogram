function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
/** 
App({
  globalData: {
    user_nickName: "213",
    user_avatar: ""
  },

  //建立socket链接
  connectSocket: function () {
    wx.connectSocket({
      //url: "ws://172.21.64.41:8090"
      url: "ws://localhost:8090"
      //url: "ws://139.199.31.150:8091"
    })
  },

  //发送指令and数据
  sendSocket: function (action, data) {
    wx.onSocketOpen(function (res) {
      console.log("WebSocket链接已打开！");
      var message = new Object();
      message.data = data;
      message.action = action;
      wx.sendSocketMessage({
        data: JSON.stringify(message)
      });
    })
  },

  //监听服务器返回数据并关闭
  setMessageFromServer: function (self, pageData) {
    wx.onSocketMessage(function (msg) {
      console.log(msg.data);
      msg = JSON.parse(msg.data);
      console.log(msg)
      self.setData({
        [pageData]: msg
      });
      //wx.closeSocket();
    });
  },

  //监听socket断开消息
  onSocketClose: function () {
    wx.onSocketClose(function () {
      console.log("【socket 链接已断开】");
    })
  },
  getMessage: function (action, data, func_domain, pageDataName) {
    //建立socket链接
    this.connectSocket();
    //发送指令and数据
    this.sendSocket(action, data);
    //监听服务器返回数据并关闭
    this.setMessageFromServer(func_domain, pageDataName);
    //监听socket断开消息
    this.onSocketClose();
  }

})
*/