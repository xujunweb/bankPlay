// pages/setpsd/setpsd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNextClick: true,   // 确认按钮是否可点击
    placeholder1: '',  //input 占位符
    placeholder2: '',
    psw1: '',   //密码
    psw2: '', 
    psw1Display: false,   //密码1是否显示明文
    psw2Display: false,   //密码2是否显示明文
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      placeholder1: '请设置6位支付密码',
      placeholder2: '请再次输入支付密码'
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //输入密码1
  bindPsw1: function (e) {
    var that = this;
    that.data.psw1 = e.detail.value.replace(/\s+/g, '');
    if (that.data.psw1 && that.data.psw2) {
      that.setData({ isNextClick: false });
    } else {
      that.setData({ isNextClick: true });
    }
  },

  //输入密码2
  bindPsw2: function (e) {
    var that = this;
    that.data.psw2 = e.detail.value.replace(/\s+/g, '');
    if (that.data.psw1 && that.data.psw2) {
      that.setData({ isNextClick: false });
    } else {
      that.setData({ isNextClick: true });
    }
  },

  //显示密码明文
  bindDisplayPsw1: function () {
    var that = this;
    that.setData({ psw1Display: !that.data.psw1Display });
  },

  //显示密码明文
  bindDisplayPsw2: function () {
    var that = this;
    that.setData({ psw2Display: !that.data.psw2Display });
  },
  //点击确认按钮
  surePsw: function () {
    var that = this;
    if (that.data.psw1.length != 6) {
      wx.showToast({
        title: '请输入6位支付密码',
        icon: 'none'
      });
      return;
    }
    if (that.data.psw1 != that.data.psw2) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none'
      });
      return;
    }
    wx.showLoading({ title: '加载中...' });

    //调接口 设置/修改密码
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})