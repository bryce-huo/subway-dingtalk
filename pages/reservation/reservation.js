var array = require('lodash/array');

Page({
  data: {
    allTeachers: [],
    currentPage: 1,
    currentTotalPage: 0,
    loading: false,
    pageLoaded: false,

    teacherFeatured: [], // 推荐咨询师
  },
  onLoad() {
    dd.showLoading({
      content: '加载中...',
    });
    var self = this;
    var app = getApp();
    // 推荐咨询师
    dd.httpRequest({
      url: app.globalData.host + '/api/counsellors',
      method: 'GET',
      data: {
        page: 1,
        limit: 20,
        featured: 1,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          self.setData({
            teacherFeatured: res.data.data,
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        self.getData();
      }
    });
  },
  onReachBottom() {
    if(this.data.currentPage < this.data.currentTotalPage){
      this.setData({
        loading: true
      })
      this.getData(this.data.currentPage+1);
    }else {
      console.log("没有更多数据了...")
    }
  },
  getData(page) {
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/counsellors',
      method: 'GET',
      data: {
        page: page ? page : 1,
        limit: 10,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          var oldData = self.data.allTeachers;
          self.setData({
            allTeachers: array.concat(oldData, res.data.data),
            currentPage: res.data.meta.current_page,
            currentTotalPage: res.data.meta.last_page
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        self.setData({
          loading: false,
          pageLoaded: true
        });
        dd.hideLoading();
      }
    });
  }
});
