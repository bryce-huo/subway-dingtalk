var array = require('lodash/array');

Page({
  data: {
    typeArray: ['请选择困扰类型'],
    teacherArray: [{id:0, name: "请选择咨询师"}],
    typeIndex: 0,
    teacherIndex: 0,

    userInfo: null,
    queryId: null,
    pageloaded: false,

    submitLoading: false,
  },
  onLoad(query) {
    dd.showLoading({
      content: '加载中...',
    });

    var app = getApp();

    this.setData({
      userInfo: app.globalData.userInfo,
      queryId: query.id ? query.id : null,
    }) 
    this.getCate();
    this.getTeacher();
  },
  getCate() {
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/courses/category',
      method: 'GET',
      data: {
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          var newTypeArray = ['请选择困扰类型'];
          (res.data.data).forEach(element => {
            newTypeArray.push(element.name);
          });
          self.setData({
            typeArray: newTypeArray
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
      }
    });
  },
  getTeacher() {
    var self = this;
    var app = getApp();
    dd.httpRequest({
      url: app.globalData.host + '/api/counsellors',
      method: 'GET',
      data: {
        limit: 50
      },
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          res.data.data.forEach((item, key) => {
            if(item.id == self.data.queryId) {
              self.setData({
                teacherIndex: (key+1)
              });
              return false;
            }
          })
          self.setData({
            teacherArray: array.concat({id:0, name: "请选择咨询师"}, res.data.data)
          })
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        dd.hideLoading();
        self.setData({
          pageloaded: true
        })
      }
    });
  },
  bindTypeChange(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      typeIndex: e.detail.value,
    });
  },
  bindTeacherChange(e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      teacherIndex: e.detail.value,
    });
  },
  formSubmit: function(e) {
    var teacherId = this.data.teacherArray[this.data.teacherIndex].id;
    var type = this.data.typeArray[this.data.typeIndex];
    if(type == '请选择困扰类型') {
      dd.alert({
        content: '请选择您的困扰类型',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(teacherId == 0) {
      dd.alert({
        content: '请选择您的咨询师',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    };
    // 提交预约信息
    var self = this;
    var app = getApp();

    self.setData({
      submitLoading: true
    });
    
    dd.httpRequest({
      url: app.globalData.host + '/api/counsellors/'+teacherId+'/appointment',
      method: 'POST',
      data: {
        dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
        counsellor_id: teacherId,
        type: type,
        name: e.detail.value['name'],
        mobile: e.detail.value['tel'],
        work_number: e.detail.value['number']
      },
      dataType: 'json',
      success: function(res) {
        // console.log(res);
        if(res.data.status_code === 200) {
          dd.showToast({
            type: 'success',
            content: '预约成功！',
            duration: 3000,
            success: () => {
              dd.navigateBack({
                delta: 2
              })
            },
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
        self.setData({
          submitLoading: false
        })
      }
    });
    // console.log(this.data.typeArray[this.data.typeIndex]);
    // console.log(this.data.teacherArray[this.data.teacherIndex].id);
    // console.log('form发生了submit事件，携带数据为：', e.detail.value);
  },
});
