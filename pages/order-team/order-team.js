Page({
  data: {
    themeArray: ['请选择主题', '主题1', '主题2', '主题3'],
    themeIndex: 0,

    teacherArray: ['请选择咨询师', '董微', '董微2', '董微3'],
    teacherIndex: 0,

    activity_date: null
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
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
});
