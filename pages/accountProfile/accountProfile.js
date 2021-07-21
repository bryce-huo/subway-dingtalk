var array = require('lodash/array');

Page({
  data: {
    userInfo: null,

    // 文化程度
    educationArray: ['请选择文化程度','博士','硕士','本科','大专','中专和中技','高中','初中及以下', '未知'],
    educationIndex: 0,
  },
  onLoad(query) {
    var app = getApp();

    this.setData({
      userInfo: app.globalData.userInfo,
    }) 
  },
  bindEducationChange(e) {
    this.setData({
      educationIndex: e.detail.value,
    });
  },
  formSubmit: function(e) {
    // var teacherId = this.data.teacherArray[this.data.teacherIndex].id;
    // var type = this.data.typeArray[this.data.typeIndex];
    // if(type == '请选择困扰类型') {
    //   dd.alert({
    //     content: '请选择您的困扰类型',
    //     buttonText: '确定',
    //     success: () => {
    //     },
    //   });
    //   return false;
    // }
    // 提交预约信息
    var self = this;
    var app = getApp();
    console.log(e.detail.value);
    // dd.httpRequest({
    //   url: app.globalData.host + '/api/counsellors/'+teacherId+'/appointment',
    //   method: 'POST',
    //   data: {
    //     counsellor_id: teacherId,
    //     type: type,
    //     name: e.detail.value['name'],
    //     mobile: e.detail.value['tel'],
    //     work_number: e.detail.value['number']
    //   },
    //   dataType: 'json',
    //   success: function(res) {
    //     // console.log(res);
    //     if(res.data.status_code === 200) {
    //       dd.showToast({
    //         type: 'success',
    //         content: '预约成功！',
    //         duration: 3000,
    //         success: () => {
    //           dd.navigateBack({
    //             delta: 2
    //           })
    //         },
    //       });
    //     }
    //   },
    //   fail: function(res) {
    //   },
    //   complete: function(res) {
    //   }
    // });
  },
});
