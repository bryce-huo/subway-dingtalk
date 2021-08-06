var array = require('lodash/array');

Page({
  data: {
    globalLoading: true,
    swiperList: [],
    homeAllProducts: [],
    currentPage: 1,
    currentTotalPage: 0,
    loading: false,

    courseFeatured: [], // 推荐课程
    psyFeatured: [], // 推荐测试
  },
  onLoad() {
    dd.showLoading({
      content: '加载中...',
    });
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/home',
      method: 'GET',
      data: {
      },
      dataType: 'json',
      success: function(res) {
        if(res.status === 200) {
          self.setData({
            swiperList: res.data.banner,
            courseFeatured: res.data.course_featured,
            psyFeatured: res.data.psy_featured,
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
      url: app.globalData.host + '/api/courses',
      method: 'GET',
      data: {
        keyword: '',
        page: page ? page : 1,
        limit: 10,
        category_id: 3
      },
      dataType: 'json',
      success: function(res) {
        //console.log(res);
        if(res.data.status_code === 200) {
          var oldData = self.data.homeAllProducts;
          self.setData({
            homeAllProducts: array.concat(oldData, res.data.data),
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
          loading: false,
          globalLoading: false
        })
      }
    });
  },
  goOrderTest() {
    var self = this;
    var app = getApp();

    if(app.globalData.admin_id === app.globalData.userInfo.dingtalk_userid) {
      dd.navigateTo({
        url: '/pages/order-test/order-test'
      })
    }else{
      dd.alert({
        // title: '出错了！',
        content: '您没有权限预约专业测评',
        buttonText: '确定',
        success: () => {
        },
      });
    }
  }
});

// Page({
//   onLoad(query) {
//     // 页面加载
//     console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
//   },
//   onReady() {
//     // 页面加载完成
//   },
//   onShow() {
//     // 页面显示
//   },
//   onHide() {
//     // 页面隐藏
//   },
//   onUnload() {
//     // 页面被关闭
//   },
//   onTitleClick() {
//     // 标题被点击
//   },
//   onPullDownRefresh() {
//     // 页面被下拉
//   },
//   onReachBottom() {
//     // 页面被拉到底部
//   },
//   onShareAppMessage() {
//     // 返回自定义分享信息
//     return {
//       title: 'My App',
//       desc: 'My App description',
//       path: 'pages/index/index',
//     };
//   },
// });
