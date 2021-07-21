var array = require('lodash/array');

Page({
  data: {
    users: [],

    date_begin: null,
    date_end: null,
  },
  onLoad() {
  },
  // 选择测评时间
  selectDateBegin() {
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      success: (res) => {
        this.setData({
          date_begin: res.date,
        })
      },
    });
  },
  selectDateEnd() {
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      success: (res) => {
        this.setData({
          date_end: res.date,
        })
      },
    });
  },
  choosePeople() {
    var self = this;
    dd.complexChoose({
      title:"选择参加专业测评的部门及人员", 
      multiple:true,
      limitTips:"超出了",          //超过限定人数返回提示
      maxUsers:1000,            //最大可选人数
      permissionType: "GLOBAL",
      responseUserOnly:true,
      startWithDepartmentId: 0,
      success:function(res){
        self.setData({
          users:res['users']
        })
        /**
        {
            "selectedCount":1, //选择人数
            "users":[{"name":"xxx","avatar":"xxx","userId":"xxx"}], //返回选人的列表，列表中的对象包含name（用户名），avatar（用户头像），userId（用户工号）三个字段
            "departments":[{"id":123,"name":"xxx","count":1}] //返回已选部门列表，列表中每个对象包含id（部门id）、name（部门名称）、number（部门人数）
        }
        */    
      },
      fail:function(err){
      }
    })
  },
  formSubmit: function(e) {
    var result;
    result = Object.assign(e.detail.value, {
      date_begin: this.data.date_begin,
      date_end: this.data.date_end,
    })
    console.log(result)
    return false;
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
    dd.httpRequest({
      url: app.globalData.host + '/api/counsellors/'+teacherId+'/appointment',
      method: 'POST',
      data: {
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
            },
          });
        }
      },
      fail: function(res) {
      },
      complete: function(res) {
      }
    });
  },
});
