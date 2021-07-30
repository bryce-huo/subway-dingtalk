var array = require('lodash/array');

Page({
  data: {
    users: [],

    date_begin: null,
    date_end: null,

    submitLoading: false,
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
          users: res['users']
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
    var self = this;
    var app = getApp();
    var users = [];

    self.data.users.forEach(element => {
      users.push(element.userId);
    });

    result = Object.assign(e.detail.value, {
      start_time: this.data.date_begin,
      end_time: this.data.date_end,
      dingtalk_users: users.join(","),
      dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
    })

    // 校验
    if(!this.data.date_begin) {
      dd.alert({
        content: '请选择测评开始时间',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(!this.data.date_end) {
      dd.alert({
        content: '请选择测评结束时间',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(e.detail.value.content == '') {
      dd.alert({
        content: '请输入测评内容',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(users.length <= 0) {
      dd.alert({
        content: '请选择参加测评人员',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
 
    // 提交预约信息
    this.setData({
      submitLoading: true
    })

    dd.httpRequest({
      url: app.globalData.host + '/api/me/duice',
      method: 'POST',
      data: result,
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          dd.showToast({
            type: 'success',
            content: '预约成功！',
            duration: 3000,
            success: () => {
              setTimeout(function() {
                dd.redirectTo({
                  url: '/pages/order-test/order-test'
                })
              }, 3000)
            },
          });
        }
      },
      fail: function(res) {
        dd.alert({
          content: res.data.message,
          buttonText: '确定',
          success: () => {
          },
        });
      },
      complete: function(res) {
        self.setData({
          submitLoading: false
        })
      }
    });
  },
});
