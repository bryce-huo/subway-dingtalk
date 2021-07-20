var array = require('lodash/array');

Page({
  data: {
    cateid: null,
    allProducts: [],
    currentPage: 1,
    currentTotalPage: 0,
    pageLoaded: false,
    loading: true,
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });
    this.setData({
      cateid: query.id
    })
    this.getData();
  },
  onReachBottom() {
    // 页面滚动到最底部
    this.setData({
      showLoadMore: true
    });
    this.getData();
  },
  getData(page) {
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/courses',
      method: 'GET',
      data: {
        page: page ? page : 1,
        limit: 10,
        category_id: self.data.cateid
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

    // dd.showLoading({
    //   content: '加载中...',
    // });
    // 模拟api加载数据
		// setTimeout(()=>{
    //   this.setData({
    //     listData: testData,
    //     showLoadMore: false
    //   });
    //   // 设置导航标题
    //   dd.setNavigationBar({
    //     title: '列表页标题'
    //   });
    //   dd.hideLoading();
    // }, 1000)
  }
});

