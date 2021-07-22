// import { assign } from 'lodash';
// import assign from 'lodash/assign';
App({
  onLaunch (options) {
    var self = this;
    var app = getApp();

    // 获取免登授权码（这个方法api文档提供）
    dd.getAuthCode({
      success: res => {
        console.log(res);
        this.authCode = res.authCode;
        dd.httpRequest({
          url: app.globalData.host + '/api/dingtalk/sync_user?code='+this.authCode,
          method: 'POST',
          data: {
          },
          dataType: 'json',
          success: function(res) {
            if(res.data.status_code === 200) {
              console.log(res.data.data);
              self.globalData.userInfo = res.data.data;
            }
          },
          fail: function(res) {
          },
          complete: function(res) {
            // dd.hideLoading();
          }
        });
      }
    });
  },
  onShow (options) {
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
    userInfo: null,
    //host: 'http://hxj.vaiwan.com',
    host: 'http://dw-psy.vaiwan.com',
  }
});
