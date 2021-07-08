var parserHtml = require("/static/parserHTML.js");

Page({
  data: {
    manager: null,
    title: 'abc',
    src: 'https://demo.dj63.com//2016/CLUB%E5%95%86%E4%B8%9A/club%E4%B8%AD%E6%96%87/20140101/%E5%88%98%E6%83%9C%E5%90%9B_%E6%88%91%E5%8F%AA%E5%9C%A8%E4%B9%8E%E4%BD%A0_[_Sk_remix_Club_]2013.mp3',
    coverImgUrl: 'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',

    audioInit: false,
    audioPlay: false,
    nodes: null,
  },
  onLoad() {
    let manager = dd.getBackgroundAudioManager()
    let events = ["onPlay", "onPause", "onStop", "onEnded", "onTimeUpdate", "onError", "onWaiting"]
    events.forEach(item => {
      manager[item] = function (event) {
        //console.log('EVENT:', item, event)
      }
    })

    // 加载富文本内容
    this.setData({
      nodes: parserHtml.parserHTML('<p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-family:SimHei;"><span style="font-size:28px;"><span style="background:#ffffff"><span style="vertical-align:baseline"><span style="line-height:24.0000pt"><b><span style="color:#323232"><span style="font-weight:bold">释放“快乐激素”，让你拥有好心情</span></span></b></span></span></span></span></span></p><p align="justify" class="p" style="margin-top:0.0000pt; margin-bottom:0.0000pt; text-align:justify"><span style="font-family:SimSun;"><span style="font-size:18px;"><span style="background:#ffffff"><span style="vertical-align:baseline"><span style="color:#323232">&nbsp; &nbsp; 现代社会，学习压力、工作压力、生活压力都很大，使得很多人常常处于烦躁、焦虑、苦闷、不开心等情绪中，甚至患上了抑郁症！</span></span></span></span></span></p><p align="center" style="text-align:center; margin:0pt 0pt 0.0001pt"><span style="font-size:18px;"><img border="0" src="http://eap.xa-metro.com:55558/static/upload/202011/647097808abe520b.png" style="max-width:500px" title="image"></span></p>')
    })
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

