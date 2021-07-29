var array = require('lodash/array');

Page({
  data: {
    allProducts: [],
    currentPage: 1,
    currentTotalPage: 0,
    pageLoaded: false,
    loading: false,
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });
    this.getData();
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
      url: app.globalData.host + '/api/me/psy?dingtalk_userid='+app.globalData.userInfo.dingtalk_userid,
      method: 'GET',
      data: {
        page: page ? page : 1,
        limit: 10,
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          var oldData = self.data.allProducts;
          self.setData({
            allProducts: array.concat(oldData, res.data.data),
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
          pageLoaded: true,
        });
        dd.hideLoading()
      }
    });
  }
});

