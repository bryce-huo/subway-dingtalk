// import { assign } from 'lodash';
// import assign from 'lodash/assign';

// import { onAuthAppBack } from 'dingtalk-design-libs/biz/openAuthMiniApp';

App({
  onLaunch (options) {
    // 第一次打开时调用
    // const { query, path } = options;
    // const { corpId } = query;
  },
  onShow (options) {
    // 获取免登授权码（这个方法api文档提供）
    dd.getAuthCode({
      success: res => {
        console.log(res);
        //this.authCode = res.authCode
      }
    })
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
    host: 'http://hxj.vaiwan.com'
  }
});
