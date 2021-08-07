Page({
  data: {
    submitLoading: false,
    queryId: null,
    is_comment: true
  },
  onLoad(query) {
    var self = this;
    var app = getApp();

    dd.showLoading({
      content: '加载中...',
    });

    this.setData({
      queryId: query.id ? query.id : null,
    });

    dd.httpRequest({
      url: app.globalData.host + '/api/group/appointments/'+query.id,
      method: 'GET',
      data: {
        dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          self.setData({
            is_comment: res.data.data.is_comment
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        dd.hideLoading();
      }
    });
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

    // 不签到中的人无法参与评价
    if(!this.data.is_comment) {
      dd.alert({
        title: '未签到人员无法参与评价',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }

    self.setData({
      submitLoading: true
    });
    
    dd.httpRequest({
      url: app.globalData.host + '/api/group/comments/'+self.data.queryId,
      method: 'POST',
      data: {
        dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
        content: e.detail.value['content'],
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          dd.alert({
            title: '评价成功！',
            buttonText: '我知道了',
            success: () => {
              dd.navigateBack({
                delta: 1
              })
            },
          });
        }else{
          dd.alert({ title: res.data.message });
        }
      },
      fail: function(res) {
        dd.alert({ title: res.data.message });
      },
      complete: function(res) {
        self.setData({
          submitLoading: false
        })
      }
    });
  }
});
