Page({
  data: {
    swiperList: ['blue', 'red', 'yellow'],
    homeAllProducts: []
  },
  onLoad() {
    // dd.httpRequest({
    //   url: 'http://dw-psy.vaiwan.com/api/home',
    //   method: 'GET',
    //   data: {
    //     from: '钉钉',
    //     production: 'DingTalk',
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     dd.alert({content: 'Request success'});
    //   },
    //   fail: function(res) {
    //     dd.alert({content: 'Request fail'});
    //   },
    //   complete: function(res) {
    //     dd.alert({content: 'Request complete'});
    //   }
    // });

    this.getData();
  },
  onReachBottom() {
    // 页面滚动到最底部
    // dd.showLoading({
    //   content: '加载更多...',
    // });
    // setTimeout(() => {
    //     dd.hideLoading();
    // }, 1000)
  },
  getData() {
    var testData = [
      { id:1,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:2,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:3,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:4,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:5,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:6,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:7,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:8,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:9,name:"抑郁无法绑架我",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:10,name:"抑郁无法绑架我1",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
    ]
    dd.showLoading({
      content: '加载中...',
    });
    // 模拟api加载数据
		setTimeout(()=>{
      this.setData({
        homeAllProducts: testData
      });
      dd.hideLoading();
    }, 1000)
  }
});



// Page({
//   onLoad(query) {
//     // 页面加载
//     console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
//   },
//   onReady() {
//     // 页面加载完成
//   },
//   onShow() {
//     // 页面显示
//   },
//   onHide() {
//     // 页面隐藏
//   },
//   onUnload() {
//     // 页面被关闭
//   },
//   onTitleClick() {
//     // 标题被点击
//   },
//   onPullDownRefresh() {
//     // 页面被下拉
//   },
//   onReachBottom() {
//     // 页面被拉到底部
//   },
//   onShareAppMessage() {
//     // 返回自定义分享信息
//     return {
//       title: 'My App',
//       desc: 'My App description',
//       path: 'pages/index/index',
//     };
//   },
// });
