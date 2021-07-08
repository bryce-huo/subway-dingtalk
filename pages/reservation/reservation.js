Page({
  data: {
    allTeacher: []
  },
  onLoad() {
    this.getData();
  },
  getData() {
    var testData = [
      { id:1,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:2,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:3,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:4,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:5,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:6,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:7,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:8,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:9,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
      { id:10,name:"董薇",img:'http://m.xinrunjiamei.com/uploads/20210620/09e9727ebb0fdd8cfd0feadf9d5799da.jpg', desc:'实战派心理专家；中科院心理研究所心理咨询与治疗专业；背景师范大学心理热门'},
    ]
    dd.showLoading({
      content: '加载中...',
    });
    // 模拟api加载数据
		setTimeout(()=>{
      this.setData({
        allTeacher: testData
      });
      dd.hideLoading();
    }, 1000)
  }
});