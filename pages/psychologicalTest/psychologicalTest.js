var array = require('lodash/array')

Page({
  data: {
    // 核心区域高度
    mainHeight: 300,
    // 当前分类
    currentCateIndex: 14,
    currentPage: 1,
    currentTotalPage: 0,
    mainCate: [],
    products: [],
    loading: false,
    searchWords: ""
  },
  onReady() {
    dd.showLoading({
      content: '加载中...',
    });
    dd.createSelectorQuery()
      .select('.header-search').boundingClientRect()
      .select('page').selectViewport().boundingClientRect().exec((ret) => {
      console.log(ret);
      this.setData({
        mainHeight: ret[1].height - ret[0].height - 5
      })
    });
  },
  onLoad() {
    // 获取分类
    this.getCate();
    // 默认获取全部数据
    this.getData();
  },
  getCate() {
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/psys/category',
      method: 'GET',
      data: {
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          self.setData({
            mainCate: array.concat({id:14, name: "全部", order: 1}, res.data.data)
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
      }
    });
  },
  getData(keyword, page) {
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/psys',
      method: 'GET',
      data: {
        keyword: self.data.searchWords,
        page: page ? page : 1,
        limit: 10,
        category_id: self.data.currentCateIndex
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          var oldData = self.data.products;
          self.setData({
            products: array.concat(oldData, res.data.data),
            currentPage: res.data.meta.current_page,
            currentTotalPage: res.data.meta.last_page
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        dd.hideLoading();
        self.setData({
          loading: false
        })
      }
    });
  },
  onScrollToLower() {
    if(this.data.currentPage < this.data.currentTotalPage){
      this.setData({
        loading: true
      })
      this.getData(null, this.data.currentPage+1);
    }else {
      console.log("没有更多数据了...")
    }
  },
  changCate(e) {
    var cateid = e.currentTarget.dataset.cateid;
    this.setData({
      currentCateIndex: cateid,
      products: []
    });
    dd.showLoading({
      content: '数据加载中...',
    });
    this.getData();
  },
  handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      searchWords: e.detail.value,
    });
  },
  doneSearch() {
    console.log('doneSearch', this.data.searchWords);
    this.setData({
      products: []
    });
    dd.showLoading({
      content: '数据加载中...',
    });
    this.getData(this.data.searchWords, this.data.currentPage);
    my.hideKeyboard();
  },
  clearSearch() {
    console.log('clear search', this.data.search);
    this.setData({
      searchWords: '',
    });
  },
});
