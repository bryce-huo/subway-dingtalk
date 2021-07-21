var AParse = require('/aParse/aParse.js')

Page({
  data: {
    manager: null,
    title: 'abc',
    src: '',
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
            AParse.aParse('article', 'html', res.data.data.body, self, 0);
          }
        },
        fail: function(res) {
        },
        complete: function(res) {
          self.setData({
            globalLoading: false
          })
          dd.hideLoading();
          
          // 统计点击
          dd.httpRequest({
            url: app.globalData.host + '/api/courses/'+query.id+'/click',
            method: 'PUT',
            dataType: 'json',
            success: function(res) {
              if(res.data.status_code === 200) {
              }
            }
          });
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
  initAudio() {
    console.log("开始播放")
    this.manager = dd.getBackgroundAudioManager()
    this.manager.title = this.data.product.audio[0].original_name;
    this.manager.coverImgUrl = this.data.coverImgUrl
    this.manager.src = this.data.product.audio[0].download_link_url;
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
    if(this.data.audioInit) {
      this.manager.stop();
    }
  },
  onUnload() {
    // 页面被关闭，关闭音频
    if(this.data.audioInit) {
      this.manager.stop();
    }
  },
  onShareAppMessage() {
    return {
      title: this.data.product.title,
      desc: this.data.product.excerpt,
      path: '/pages/article/article?id='+this.data.product.id
    };
  },
})

