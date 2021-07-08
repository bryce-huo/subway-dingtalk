Page({
  data: {
    curSelected: null
  },
  onLoad() {},
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
