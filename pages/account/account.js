Page({
  data: {
    pageLoaded: false,
    userInfo: null,  // 用户信息
  },
  onLoad() {
    var app = getApp();
    
    //console.log(app.globalData);

    this.setData({
      userInfo: app.globalData.userInfo,
      pageLoaded: true,
    })
  },
  goScan() {
    var self = this;
    var app = getApp();

    dd.scan({
      type: 'qr',
      success: (res) => {
        // dd.alert({ title: res.code });
        var option = JSON.parse(res.code);
        var appointments_id = option.id;

        if(option.type == 'qian') {
          dd.showLoading({
            content: '签到中...',
          });

          dd.httpRequest({
            url: app.globalData.host + '/api/group/signs/'+appointments_id,
            method: 'POST',
            data: {
              dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
            },
            dataType: 'json',
            success: function(res) {
              if(res.data.status_code === 200) {
                dd.alert({ title: '签到成功！' });
              } else {
                dd.alert({ title: res.data.message });
              }
            },
            fail: function(res) {
              dd.alert({ title: res.data.message });
            },
            complete: function(res) {
              dd.hideLoading();
            }
          });
        } else {
          dd.navigateTo({
            url: '/pages/signle_review/signle_review?id='+appointments_id
          })
        }
      },
    });
  }
});
