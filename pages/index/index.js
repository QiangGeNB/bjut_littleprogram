var app = getApp()
Page({
    data: {
        _data: {
            first_animationData: {},
            second_animation: {}
        },
        no1: {
            // name: ["崔遥", "李琰", "强哥", "周杰伦", "陈龙"],
            time: ["毕业前夕", "毕业当天", "情人节", "元旦", "七夕", "儿童节",  "光棍节", "520", "交论文前夜"],
            location: ["信息楼", "一教", "二教", "三教", "四教", "美食园", "宿舍", "奥运场馆", "实验室", "月亮湖", "操场", "图书馆", "金工楼", "校医院", "软件楼", "科学楼", "健身房", "人文楼", "天天食堂", "奥运食堂", "知行楼", "经管楼", "机电楼", "建工楼", "基础楼", "工大建国饭店", "工大地铁站"],
            action: ["熬夜补习高数", "吃加了五根香肠的泡面", "打了一夜游戏", "玩了一夜狼人杀", "下了1篇论文决定一夜读完", "打扫卫生", "吃了变态辣鸡翅", "高唱小苹果", "讨论宇宙的起源", "从诗词歌赋谈到物理高数", "跑了两千米", "做了一夜实验", "喂了香肠给路边猫猫狗狗", "玩俄罗斯方块", "涮火锅", "谈论皮皮虾哲学", "跳骑马舞","仰望星空"],
            target: ["学长", "学姐", "学弟", "学妹", "室友", "同门", "隔壁大爷", "宿管大妈", "食堂阿姨", "保安小哥", "男神", "女神", "路边阿喵", "路边旺财"],
            result: [
                ["终于学会了1 + 1", "终于过了"],
                ["然后撑得动不了了", "然后开开心心又吃了一碗", "可是没抢过对方只喝了一口汤"],
                ["第二天睡到下午", "成功将电脑玩死机了", "一局没赢"],
                ["终于成功坑了己方队友", "成功成为最终赢家", "一不小心输在最后一局上"],
                ["然后一不小心睡着了", "然后成功发表sci", "结果只看了三页"],
                ["成功吓晕了路边的花花草草", "屋里干净的一尘不染", "结果不如不打扫之前的"],
                ["跑了一夜厕所", "辣到抱头痛哭", "没吃过瘾又要了一份"],
                ["成功伤害了路人的耳朵", "被路人发到朋友圈火了一把", "成功成为工大十大奇葩之最"],
                ["然后一言不合打起麻将", "然后获得了诺贝尔奖", "然后飞向了太空"],
                ["然后一起去看还珠格格", "然后发现都没听懂", "结果第二天考了满分"],
                ["然后累的瘫在地上", "然后意犹未尽的又跑了五千米","然后腿抽筋了"],
                ["然后成功的写错了实验数据", "然后从此踏上了学霸之路","然后一不小心一键清零了数据"],
                ["然后馋的自己吃了一根", "然后收获了猫猫狗狗的香吻一枚","然后开心的唱起了小苹果"],
                ["然后手机没电了","然后手机没电了"],
                ["然后发现自己一口菜都没抢上", "然后发现一不小心自己把肉都吃了","然后第二天长肥了两千克"],
                ["然后骑上皮皮虾走了", "然后发现饿了去吃了一顿皮皮虾","然后手牵手共创皮皮虾大业"],
                ["然后成为了广场舞之王", "然后跳到嗨处摔了一跤","然后被扫地大妈轰了出去"],
                ["然后把脖子扭了", "然后第二天成功的感冒了","然后和对方在星空下跳起了华尔兹"]
            ]
        }
    },
    onLoad: function (option) {
        var action_num = app.getRandom(this.data.no1.action);
        this.setData({
            name: option.userName,
            time: this.data.no1.time[app.getRandom(this.data.no1.time)],
            location: this.data.no1.location[app.getRandom(this.data.no1.location)],
            action: this.data.no1.action[action_num],
            target: this.data.no1.target[app.getRandom(this.data.no1.target)],
            result: this.data.no1.result[action_num][app.getRandom(this.data.no1.result[action_num])]
        });
    },
    onShow: function () {
        var first_animation = wx.createAnimation({
            duration: 100,
            timingFunction: 'ease'
        });

        this.first_animation = first_animation;

        this.first_animation.opacity(1).step({ duration: 3000 });
        this.setData({
            first_animationData: this.first_animation.export()
        });
        self = this;
        setTimeout(function () {
            var second_animation = wx.createAnimation({
                duration: 5000,
                timingFunction: 'ease'
            });

            self.second_animation = second_animation;

            self.second_animation.opacity(1).step();
            self.setData({
                second_animation: self.second_animation.export()
            });
        },3000);
    },
    onShareAppMessage: function () {
        return {
            title: '我与北工大的故事',
            desc: 'My story with Beijing University of Technology',
            path: '/pages/welcome/welcome'
        }
    }
})
