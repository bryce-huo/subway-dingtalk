var AParse = require('/aParse/aParse.js')

Page({
  data: {
    manager: null,
    title: 'abc',
    src: 'https://demo.dj63.com//2016/CLUB%E5%95%86%E4%B8%9A/club%E4%B8%AD%E6%96%87/20140101/%E5%88%98%E6%83%9C%E5%90%9B_%E6%88%91%E5%8F%AA%E5%9C%A8%E4%B9%8E%E4%BD%A0_[_Sk_remix_Club_]2013.mp3',
    coverImgUrl: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',

    audioInit: false,
    audioPlay: false,
    AParse:AParse,

    product: null,
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });
    var self = this;
    var app = getApp();

    // 普通文章
    if(query.id) {
      dd.httpRequest({
        url: app.globalData.host + '/api/courses/'+query.id,
        method: 'GET',
        data: {
        },
        dataType: 'json',
        success: function(res) {
          if(res.data.status_code === 200) {
            self.setData({
              product: res.data.data,
            });
            AParse.aParse('article', 'html', res.data.data.body, self, 0)
          }
        },
        fail: function(res) {
        },
        complete: function(res) {
          self.setData({
            globalLoading: false
          })
          dd.hideLoading();
        }
      });
    }
    // 单页
    if(query.page) {
      dd.httpRequest({
        url: app.globalData.host + '/api/page/'+query.page,
        method: 'GET',
        data: {
        },
        dataType: 'json',
        success: function(res) {
          if(res.data.status_code === 200) {
            self.setData({
              product: res.data.data,
            });
            AParse.aParse('article', 'html', res.data.data.body, self, 0)
          }
        },
        fail: function(res) {
        },
        complete: function(res) {
          dd.hideLoading();
        }
      });
    }
    
    // let manager = dd.getBackgroundAudioManager()
    // let events = ["onPlay", "onPause", "onStop", "onEnded", "onTimeUpdate", "onError", "onWaiting"]
    // events.forEach(item => {
    //   manager[item] = function (event) {
    //     //console.log('EVENT:', item, event)
    //   }
    // })
  },
  start() {
    // let manager = dd.getBackgroundAudioManager()
    // manager.title = this.data.title
    // manager.coverImgUrl = this.data.coverImgUrl
    // manager.src = this.data.src
  },
  initAudio() {
    console.log("开始播放")
    this.manager = dd.getBackgroundAudioManager()
    this.manager.title = this.data.title
    this.manager.coverImgUrl = this.data.coverImgUrl
    this.manager.src = this.data.src
    this.setData({
      audioInit: true,
      audioPlay: true,
    })
  },
  playToggle() {
    if(this.data.audioPlay) {
      // 暂停音频
      console.log("暂停音频")
      this.manager.pause();
    } else {
      // 播放音频
      console.log("播放音频")
      this.manager.play();
    }
    this.setData({
      audioPlay: !this.data.audioPlay,
    })
  },
  onHide() {
    // 页面隐藏，关闭音频
    this.manager.stop();
  },
  onUnload() {
    // 页面被关闭，关闭音频
    this.manager.stop();
  },
  onShareAppMessage() {
    return {
      title: '分享微课标题',
      desc: '分享微课描述',
      path: ''
    };
  },
})

