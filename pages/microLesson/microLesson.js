// var graceJS = require('/GraceUI5/js/grace.js');

Page({
  data: {
    // 核心区域高度
    mainHeight: 300,
    // 当前分类
		currentCateIndex: 0,
    mainCate: [
      { cateid: 0, name: '全部'},
      { cateid: 1, name: '心理健康'},
      { cateid: 2, name: '婚恋家庭'},
      { cateid: 3, name: '青少年问题'},
      { cateid: 4, name: '儿童心理'},
      { cateid: 5, name: '个性气质'},
      { cateid: 6, name: '人力资源'},
      { cateid: 7, name: '职场情商'},
      { cateid: 21, name: '专业测评'}
    ],
    products:[]
  },
  onReady() {
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
    this.getData();
  },
  getData() {
    var testData = [
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:1,name:"你的一生会遇到几段恋爱？",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc:'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'},
      { id:2,name:"你的婚姻生活为什么总是不美满",img:'https://cmsuse.oss-cn-beijing.aliyuncs.com/g5/28.png', desc: 'DingTalk OpenAPI新增通讯录相关接口，你可通过这些接口查询企业邀请信息和最新钉钉指数信息。'}
    ]
    dd.showLoading({
      content: '加载中...',
    });
    // 模拟api加载数据
		setTimeout(()=>{
      this.setData({
        products: testData
      });
      dd.hideLoading();
    }, 1000)
  },
  onScrollToLower() {
    dd.showLoading({
      content: '加载更多...',
    });
    setTimeout(() => {
        dd.hideLoading();
    }, 3000)
  },
  changCate(e) {
    var cateid = e.currentTarget.dataset.cateid;
    this.setData({
      currentCateIndex: cateid
    });
    this.getData();
  },
  handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      search: e.detail.value,
    });
  },
  doneSearch() {
    console.log('doneSearch', this.data.search);
    my.hideKeyboard();
  },
  clearSearch() {
    console.log('clear search', this.data.search);
    this.setData({
      search: '',
    });
  },
});
