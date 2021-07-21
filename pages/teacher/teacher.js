var AParse = require('/aParse/aParse.js')

Page({
  data: {
    moreExpand: false,
    curTeacherId: null,
    AParse: AParse,
    product: null,
    pageLoaded: false,
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });
    var self = this;
    var app = getApp();
    
    self.setData({
      curTeacherId: query.id
    });

    if(query.id) {
      dd.httpRequest({
        url: app.globalData.host + '/api/counsellors/'+query.id,
        method: 'GET',
        data: {
        },
        dataType: 'json',
        success: function(res) {
          if(res.data.status_code === 200) {
            self.setData({
              product: res.data.data,
            });
            AParse.aParse('article', 'html', res.data.data.intro, self, 0)
          }
        },
        fail: function(res) {
        },
        complete: function(res) {
          self.setData({
            pageLoaded: true
          })
          dd.hideLoading();

          // 统计点击
          dd.httpRequest({
            url: app.globalData.host + '/api/counsellors/'+query.id+'/click',
            method: 'PUT',
            dataType: 'json',
            success: function(res) {
            }
          });
        }
      });
    }
  },
  showMore() {
    this.setData({
      moreExpand: !this.data.moreExpand
    })
  },
  beginOrder() {
    dd.navigateTo({
      url: '/pages/order-personal/order-personal?id='+this.data.curTeacherId
    })
  }
});
