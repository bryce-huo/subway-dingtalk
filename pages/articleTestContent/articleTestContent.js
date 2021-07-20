Page({
  data: {
    subjects: [], // 所有题目
    curSelected: null
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });
    var self = this;
    var app = getApp();

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
            subjects: res.data.data.subjects,
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        dd.hideLoading();
      }
    });
  },
  select(event) {
    var index = event.target.dataset.index;
    this.setData({
      curSelected: index
    });
    dd.showLoading({
      content: '结果页...',
    });
    setTimeout(function() {
      dd.hideLoading();
      dd.navigateTo({
        url: '/pages/articleTestResult/articleTestResult'
      })
    }, 1500)
  }
});
