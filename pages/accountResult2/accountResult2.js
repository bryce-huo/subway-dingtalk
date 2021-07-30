Page({
  data: {
    title: '',
    content: '',
    pageLoaded: false,
  },
  onLoad(query) {
    var self = this;
    var app = getApp();

    self.setData({
      title: query.title,
      content: query.content,
    });
  }
});
