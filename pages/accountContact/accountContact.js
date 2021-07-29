Page({
  data: {
    submitLoading: false,
  },
  onLoad(query) {
    var app = getApp();

    this.setData({
      userInfo: app.globalData.userInfo,
      queryId: query.id ? query.id : null,
    }) 
  },
  formSubmit: function(e) {
    var content = e.detail.value['content'];
    if(content == '') {
      dd.alert({
        content: '请输入内容',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    // 提交预约信息
    var self = this;
    var app = getApp();

    self.setData({
      submitLoading: true
    });
    
    dd.httpRequest({
      url: app.globalData.host + '/api/me/psy/',
      method: 'POST',
      data: {
        dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
        content: e.detail.value['content'],
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          dd.showToast({
            type: 'success',
            content: '提交成功，我们会尽快与您联系！',
            duration: 3000,
            success: () => {
              dd.navigateBack({
                delta: 1
              })
            },
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        self.setData({
          submitLoading: false
        })
      }
    });
  }
});
