// require('./common/runtime.js')
// require('./common/vendor.js')


App({
  onLaunch (options) {
    // 第一次打开时调用
    // const { query, path } = options;
    // const { corpId } = query;
  },
  onShow (options) {
    // 从后台被scheme重新打开时调用
    // const { query, path } = options;
    // const { corpId } = query;
  },
  onHide () {
    // 进入后台时调用
    console.log('App hide');
  },
  onError (error) {
    // 小程序执行出错时调用
    console.log(error);
  },
  globalData: {
    foo: 'bar'
  }
});
