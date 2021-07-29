Page({
  data: {
    themeArray: ['请选择主题', '团队凝聚力（内场）', '团队凝聚力（外场）', '压力管理', '曼陀罗绘画', '团体沙盘', '读书分享会', '电影赏析'],
    themeIndex: 0,

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
