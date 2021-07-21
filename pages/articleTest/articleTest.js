Page({
  data: {
    c: false,
    product: null
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });
    var self = this;
    var app = getApp();

    // 普通文章
    dd.httpRequest({
      url: app.globalData.host + '/api/psys/'+query.id,
      method: 'GET',
      data: {
        is_subject: 1,
        is_score: 1,
        is_result: 1,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          self.setData({
            product: res.data.data,
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        dd.hideLoading();
        self.setData({
          pageLoaded: true
        })
      }
    });
  },
  testStart(event) {
    var id = event.target.dataset.id;
    dd.navigateTo({
      url: '/pages/articleTestContent/articleTestContent?id='+id
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
