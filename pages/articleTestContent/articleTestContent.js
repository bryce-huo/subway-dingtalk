Page({
  data: {
    pageLoaded: false,

    subjects: [], // 所有题目
    
    subject_index: 1,
    option_choose: null, // 已选择答案
    score_choose: null  // 已选择分数
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
            option_choose: new Array(res.data.data.subject_count),
            score_choose: new Array(res.data.data.subject_count)
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
  select(event) {
    var self = this;
    var data = event.target.dataset;
    var $subject_index = this.data.subject_index;
    var $option_choose = this.data.option_choose;
    var $score_choose = this.data.score_choose;

    $option_choose[$subject_index - 1] = data.index;
    $score_choose[$subject_index - 1] = data.score;

    this.setData({
      option_choose: $option_choose,
      score_choose: $score_choose,
    });

    // 为了有选中效果，加个延迟队列
    setTimeout(function() {
      if(self.data.subject_index < self.data.subjects.length) {
        self.setData({
          subject_index: self.data.subject_index + 1
        })
      } else {
        dd.confirm({
          title: '提示',
          content: '是否提交？',
          confirmButtonText: '提交',
          cancelButtonText: '取消',
          success: (result) => {
            dd.navigateTo({
              url: '/pages/articleTestResult/articleTestResult'
            })
          },
        });
      }
    }, 300)
  },
  preSubject() {
    var self = this;
    var $subject_index = self.data.subject_index;
    var $option_choose = self.data.option_choose;
    var $score_choose = self.data.score_choose;

    $option_choose.forEach((element, key) => {
      if(key >= ($subject_index - 1)) {
        delete $option_choose[key];
      }
    });
    $score_choose.forEach((element, key) => {
      if(key >= ($subject_index - 1)) {
        delete $score_choose[key];
      }
    });

    this.setData({
      subject_index: $subject_index - 1,
      option_choose: $option_choose,
      score_choose: $score_choose,
    }); 
  }
});
