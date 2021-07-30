Page({
  data: {
    id: null,
    result_id: null,
    info: null,
    score: 0,
    result: null,

    pageLoaded: false,
  },
  onLoad(query) {
    var self = this;
    var app = getApp();

    // console.log(query);
    self.setData({
      id: query.id,
      result_id: query.result_id,
      score: query.score
    });

    dd.httpRequest({
      url: app.globalData.host + '/api/psys/'+self.data.id,
      method: 'GET',
      data: {
        is_subject: 1,
        is_score: 1,
        is_result: 1,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          var score = self.data.score;
          var result = '';
          res.data.data.scores.forEach(element => {
            if(score >= element.score_start && score <= element.score_end){
              result = element.desc;
            }
          });

          self.setData({
            info: res.data.data,
            result: result,
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        // dd.hideLoading();
        self.setData({
          pageLoaded: true
        })
      }
    });
  },
  submitComment(e) {
    var self = this;
    var app = getApp();

    if(e.detail.value.review == '') {
      dd.alert({
        content: '请输入评论内容',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }

    dd.httpRequest({
      url: app.globalData.host + '/api/psys/'+self.data.id+'/comment/'+self.data.result_id,
      method: 'POST',
      data: {
        dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
        comment: e.detail.value.review,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          dd.alert({
            content: '评论成功',
            buttonText: '确定',
            success: () => {
              dd.redirectTo({
                url: '/pages/articleTest/articleTest?id='+self.data.id
              })
            },
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
      }
    });
  }
});
