Page({
  data: {},
  onLoad() {},
  testStart() {
    dd.navigateTo({
      url: '/pages/articleTestContent/articleTestContent'
    })
  },
  onShareAppMessage() {
    return {
      title: '分享测评标题',
      desc: '分享测评描述',
      path: ''
    };
  },
});
