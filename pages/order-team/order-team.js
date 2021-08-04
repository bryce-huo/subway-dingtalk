Page({
  data: {
    themeArray: ['请选择主题', '团队凝聚力（内场）', '团队凝聚力（外场）', '压力管理', '曼陀罗绘画', '团体沙盘', '读书分享会', '电影赏析'],
    themeIndex: 0,

    activity_date: null,

    submitLoading: false,
  },
  // 切换主题
  bindThemeChange(e) {
    this.setData({
      themeIndex: e.detail.value,
    });
  },
  // 选择活动时间
  selectDate() {
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      success: (res) => {
        this.setData({
          activity_date: res.date,
        })
      },
    });
  },
  bindTeacherChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      teacherIndex: e.detail.value,
    });
  },
  onLoad() {},
  formSubmit: function(e) {
    var result = {};
    var self = this;
    var app = getApp();

    // 校验
    if(e.detail.value['title'] == 0) {
      dd.alert({
        content: '请选择活动主题',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(!self.data.activity_date) {
      dd.alert({
        content: '请选择活动时间',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(e.detail.value['person'] === '') {
      dd.alert({
        content: '请输入预约负责人',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(e.detail.value['mobile'] === '') {
      dd.alert({
        content: '请输入联系方式',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }
    if(e.detail.value['remark01'] === '') {
      dd.alert({
        content: '请输入活动需求',
        buttonText: '确定',
        success: () => {
        },
      });
      return false;
    }

    result = Object.assign(e.detail.value, {
      dingtalk_userid: app.globalData.userInfo.dingtalk_userid,
      begin_start: self.data.activity_date,
      title: self.data.themeArray[e.detail.value['title']]
    })
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    // 发起预约
    this.setData({
      submitLoading: true
    })

    dd.httpRequest({
      url: app.globalData.host + '/api/group/appointments',
      method: 'POST',
      data: result,
      dataType: 'json',
      success: function(res) {
        if(res.data.status_code === 200) {
          dd.showToast({
            type: 'success',
            content: '提交成功，请等待审批结果',
            duration: 3000,
            success: () => {
              dd.redirectTo({
                url: '/pages/order-team/order-team'
              })
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
