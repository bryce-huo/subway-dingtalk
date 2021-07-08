var parserHtml = require("/static/parserHTML.js");

Page({
  data: {
    swiperList: ['blue', 'red', 'yellow'],
    nodes: null,
    moreExpand: false,
    curTeacherId: null
  },
  onLoad(query) {
    dd.alert({
      content: query['id'],
    });
    // 加载富文本内容
    this.setData({
      curTeacherId: query['id'],
      nodes: parserHtml.parserHTML('<p class="info_text">个人简介：</p><p class="info_text">北京师范大学心理学硕士毕业</p><p class="info_text">北京市残疾人康复中心心理咨询师</p><p class="info_text">国家二级咨询师</p><p class="info_text">箱庭治疗师</p><p class="info_text">林文采模式萨提亚体验式家庭治疗师</p><p class="info_text">心理治疗师（初级）</p><p class="info_text"></p><p class="info_text">受训背景</p><p class="info_text">2017.03-2018.03 林文采萨提亚家庭治疗模式专业课Level-1</p><p class="info_text">2019.10-至今    林文采心理营养育儿法</p><p class="info_text">2020.05-至今    如何在婚姻里面经营亲密关系 2大秘籍解决99%婚姻难题</p><p class="info_text">2020.12-至今    第三期林文采萨提亚模式督导课程</p><p class="info_text">长期接受家庭治疗督导， 进行收费咨累计超过 800 小时，接受收费个案督导 200 小时。</p><p class="info_text"></p><p class="info_text">工作经历</p><p class="info_text">2021.4至今         高校兼职咨询师</p><p class="info_text">为高校学生提供心理咨询服务</p><p class="info_text"></p><p class="info_text">2019.8-2021.2     博沃思全职心理咨询师</p><p class="info_text">安排个体治疗,运用心理咨询与治疗促进患者自我成长,包括患者个人的心理困扰、心理问题、性格分析、情绪问题、婚姻与家庭关系、人际关系、价值观人生观等问题的咨询与治疗。</p><p class="info_text">为来访家庭提供心理健康指导以及亲子教育指导。</p><p class="info_text">为企业员工开展家庭治疗以及家庭指导的教学和模拟。</p><p class="info_text"></p><p class="info_text">2017.4-2019.2     京师博仁 心理咨询师</p><p class="info_text">了解和评定来访者生活方式的特点、业余爱好、兴趣、社交能力、情绪行为特点,评估来访者是否适合进行咨询,为来访者提供适宜的帮助;</p><p class="info_text">与咨询助理进行沟通合作,解决来访对咨询的疑问和需求;</p><p class="info_text">每周固定团体督导,提升个案能力;</p><p class="info_text">整理来访档案,及时根据来访的进展制定和调整咨询方案。</p><p class="info_text"></p><p class="info_text">2016.2-2017.4      庭瑞中医 治疗师</p><p class="info_text">为患者进行精神以及心理评估，安排治疗计划。</p><p class="info_text">在科室主任的带领下巡查病房，为精神状态不稳定的病患进行实时评估，及时调整治疗方案</p><p class="info_text"></p><p class="info_text">2015.10-2016.6    北京残疾人康复指导中心/北京第三聋人学校 箱庭治疗师</p><p class="info_text">为自闭症及残障儿童进行沙盘游戏治疗。</p><p class="info_text"></p><p class="info_text"></p><p class="info_text">主要对象：</p><p class="info_text">儿童青少年、大学生、成人、伴侣、家庭</p><p class="info_text"></p><p class="info_text">擅长方向：</p><p class="info_text">儿童问题：自闭症、多动症、阅读障碍、问题行为、考试焦虑、厌学、青春期、沉迷游戏</p><p class="info_text">恋爱婚姻：感情淡漠、夫妻矛盾、失恋、离婚、信任危机、沟通障碍</p><p class="info_text">家庭关系：父母离异、单亲家庭、复杂性哀伤处理、家庭人际关系问题（夫妻关系、婆媳关系、亲子关系）</p><p class="info_text">情绪问题：焦虑抑郁情绪、神经衰弱、产后抑郁、考试压力、环境不适应、产前抑郁等</p><p class="info_text">其他神经症性问题：焦虑症、抑郁症、强迫症、双相情感障碍等</p><p class="info_text"></p>')
    })
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
