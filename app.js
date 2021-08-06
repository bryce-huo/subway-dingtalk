// import { assign } from 'lodash';
// import assign from 'lodash/assign';
App({
  onLaunch (options) {
    var self = this;
    var app = getApp();

    // console.log(options)

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
              var _data = res.data.data;
              console.log(_data);
              self.globalData.userInfo = _data;
              // 如果字段不全，强制跳转至个人中心进行信息补全
              if(!_data.birthday || !_data.degree || !_data.gender || !_data.living_status || !_data.marital_status) {
                dd.alert({
                  content: '信息不完整，请先补充个人基本信息',
                  buttonText: '确定',
                  success: () => {
                    dd.redirectTo({
                      url: '/pages/accountProfile/accountProfile'
                    })
                  },
                });
              }
            }
          },
          fail: function(res) {
            dd.redirectTo({
              url: '/pages/500/500'
            })
          },
          complete: function(res) {
            // console.log(res)
            if(res.data.status_code === 400) {
              dd.redirectTo({
                url: '/pages/500/500'
              })
            }
            // dd.hideLoading();
          }
        });
      },
      fail:function(err){
        dd.redirectTo({
          url: '/pages/404/404'
        })
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
    // host: 'http://hxj.vaiwan.com',
    host: 'http://dw-psy.vaiwan.com',
    // 审批人userid，生产环境：宋雨悦
    admin_id: '031254064337914497'
  }
});
