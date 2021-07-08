Page({
  data: {
    listData: [],
    showLoadMore: false
  },
  onLoad() {
    this.getData();
  },
  onReachBottom() {
    // 页面滚动到最底部
    this.setData({
      showLoadMore: true
    });
    this.getData();
  },
  getData() {
    var testData = [
      { id:1,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:2,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:3,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:4,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:5,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:6,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:7,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:8,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:9,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
      { id:10,name:"普通列表页",img:'http://m.xinrunjiamei.com/uploads/20190217/9125de12d7bfd392d287e4682a12b73b.png', desc:'需要指出的是，抑郁情绪是一种普遍存在的情绪，每个人在一生的过程里，都会多次体验到抑郁情绪，它不等同于抑郁症。'},
    ];
    dd.showLoading({
      content: '加载中...',
    });
    // 模拟api加载数据
		setTimeout(()=>{
      this.setData({
        listData: testData,
        showLoadMore: false
      });
      // 设置导航标题
      dd.setNavigationBar({
        title: '列表页标题'
      });
      dd.hideLoading();
    }, 1000)
  }
});

