var array = require('lodash/array');

Page({
  data: {
    userInfo: null,

    // 性别
    genderObj: [
      {name: "选择性别", id: "0"},
      {name: "男", id: "1"},
      {name: "女", id: "2"},
    ],
    genderObjIndex: 0,

    // 文化程度
    educationObj: [
      {name: "请选择文化程度", id: "0"},
      {name: "博士", id: "1"},
      {name: "硕士", id: "2"},
      {name: "本科", id: "3"},
      {name: "大专", id: "4"},
      {name: "中专和中技", id: "5"},
      {name: "高中", id: "6"},
      {name: "初中及以下", id: "7"},
      {name: "未知", id: "8"},
    ],
    educationObjIndex: 0,

    // 婚姻状况
    maritalObj: [
      {name: "选择婚姻状况", id: "0"},
      {name: "未婚", id: "1"},
      {name: "已婚", id: "2"},
      {name: "离婚", id: "3"},
      {name: "丧偶", id: "4"},
      {name: "未知", id: "5"},
    ],
    maritalObjIndex: 0,

    // 居住情况
    livingObj: [
      {name: "选择居住情况", id: "0"},
      {name: "单独居住", id: "1"},
      {name: "与亲友居住", id: "2"},
      {name: "与配偶和子女居住", id: "3"},
      {name: "与父母居住", id: "5"},
      {name: "与配偶居住", id: "6"},
      {name: "与子女居住", id: "7"},
      {name: "未知", id: "4"},
    ],
    livingObjIndex: 0,

    // 出生日期
    birthday: null,

    // 错误信息
    genderError: false,
    degreeError: false,
    maritalError: false,
    livingError: false,
    birthdayError: false,
  },
  onLoad(query) {
    var app = getApp();

    this.setData({
      userInfo: app.globalData.userInfo,
    }) 
  },
  bindGenderChange(e) {
    this.setData({
      genderObjIndex: e.detail.value,
    });
  },
  bindEducationChange(e) {
    this.setData({
      educationObjIndex: e.detail.value,
    });
  },
  bindMaritalChange(e) {
    this.setData({
      maritalObjIndex: e.detail.value,
    });
  },
  bindLivingChange(e) {
    this.setData({
      livingObjIndex: e.detail.value,
    });
  },
  // 选择活动时间
  selectDate() {
    dd.datePicker({
      format: 'yyyy-MM-dd',
      success: (res) => {
        this.setData({
          birthday: res.date,
        })
      },
    });
  },
  formSubmit: function(e) {
    // 提交预约信息
    var self = this;
    var app = getApp();
    var resultData = null;
    var hasError = false;

    if(e.detail.value['gender'] == 0) {
      hasError = true;
      this.setData({genderError: true});
    }else{
      hasError = false;
      this.setData({genderError: false});
    }

    if(e.detail.value['degree'] == 0) {
      hasError = true;
      this.setData({degreeError: true})
    }else{
      hasError = false;
      this.setData({degreeError: false})
    }

    if(e.detail.value['marital_status'] == 0) {
      hasError = true;
      this.setData({maritalError: true})
    }else{
      hasError = false;
      this.setData({maritalError: false})
    }

    if(e.detail.value['living_status'] == 0) {
      hasError = true;
      this.setData({livingError: true})
    }else{
      hasError = false;
      this.setData({livingError: false})
    }

    if(!self.data.birthday) {
      hasError = true;
      this.setData({birthdayError: true})
    }else{
      hasError = false;
      this.setData({birthdayError: false})
    }

    if(hasError) {
      dd.alert({
        content: '请完善您的基本信息',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }

    resultData = Object.assign(e.detail.value, {
      dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
      birthday: self.data.birthday
    })

    //console.log(e.detail.value);

    dd.httpRequest({
      url: app.globalData.host + '/api/dingtalk/update_user',
      method: 'POST',
      data: resultData,
      dataType: 'json',
      success: function(res) {
        console.log(res);
        if(res.data.status_code === 200) {
          // dd.showToast({
          //   type: 'success',
          //   content: '预约成功！',
          //   duration: 3000,
          //   success: () => {
          //     dd.navigateBack({
          //       delta: 2
          //     })
          //   },
          // });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
      }
    });
  },
});
