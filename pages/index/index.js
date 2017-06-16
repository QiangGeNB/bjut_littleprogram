var app = getApp()
Page({
  data: {
    _data: {},
    no1: {
      name: ["","崔遥", "李琰", "强哥", "周杰伦", "陈龙"],
      time: ["毕业前夕", "毕业当天", "情人节", "元旦", "七夕", "儿童节", "清明节", "光棍节", "520", "交论文前夜"],
      location: ["信息楼", "一教", "二教", "三教", "四教", "美食园", "宿舍", "奥运场馆", "实验室", "月亮湖", "操场", "图书馆", "金工楼", "校医院", "软件楼", "科学楼", "健身房", "人文楼", "天天食堂", "奥运食堂", "知行楼", "经管楼", "机电楼", "建工楼", "基础楼", "工大建国饭店", "工大地铁站", "厕所"],
      action: ["熬夜补习高数（终于学会了1 + 1,终于过了,终于没过）", "吃加了五根香肠的泡面（然后撑得动不了了,然后开开心心又吃了一碗,没抢过对方只喝了一口汤）", "打了一夜游戏（第二天睡到下午,成功将电脑玩死机了,一局没赢）", "玩了一夜狼人杀（终于成功击杀了己方队友,成功成为最终赢家,一不小心输在最后一局上）", "下了20篇论文决定一夜读完（然后一不小心睡着了,然后成功发表sci,结果只看了三页）", "打扫卫生（成功吓晕了路边的花花草草,屋里干净的一尘不染,结果不如不打扫之前的）", "吃了变态辣鸡翅（跑了一夜厕所,辣到抱头痛哭,没吃过瘾又要了一份）", "高唱校歌（成功伤害了路人的耳朵,被路人发到朋友圈火了一把,成功成为工大十大奇葩之最）", "讨论宇宙的起源（然后一言不合打起麻将,然后获得了诺贝尔奖,然后飞向了太空）", "从诗词歌赋谈到物理高数（然后一起去看还珠格格,然后发现都没听懂,结果第二天考了满分）"],
      target: ["老师","学长","学姐","学弟","学妹","室友","同门","隔壁大爷","宿管大妈","食堂阿姨","保安小哥","男神","女神","自己","路边阿喵","路边旺财"]
    }
  },
  onLoad: function (option) {
    this.setData({
      name: option.userName,
      time: this.data.no1.time[app.getRandom(this.data.no1.time)],
      location: this.data.no1.location[app.getRandom(this.data.no1.location)],
      action: this.data.no1.action[app.getRandom(this.data.no1.action)],
      target: this.data.no1.target[app.getRandom(this.data.no1.target)]
    });
    if (wx.getStorageSync('userinfo') == "") {
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
  }
})
