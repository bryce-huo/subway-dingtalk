Page({
  data: {
    typeArray: ['请选择困扰类型', '家庭问题', '情感问题', '职场情商'],
    teacherArray: ['请选择咨询师', '董微', '董微2', '董微3'],
    typeIndex: 0,
    teacherIndex: 0
  },
  bindTypeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      typeIndex: e.detail.value,
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
