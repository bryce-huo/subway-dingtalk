Page({
  data: {
    pageLoaded: false,
    userInfo: null,  // 用户信息
  },
  onLoad() {
    var app = getApp();
    
    //console.log(app.globalData);

    this.setData({
      userInfo: app.globalData.userInfo,
      pageLoaded: true,
    })
  },
});
