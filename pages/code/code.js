// pages/code/code.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    code:'',  //验证码
    codeText:'获取验证码'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  //倒计时
  countdown: function (second) {
    this.setData({ codeText: '重新获取(' + second + 's)' });
    setTimeout(() => {
      second--;
      if (second == 0) {
        this.setData({ codeText: '获取验证码' });
      } else {
        this.countdown(second);
      }
    }, 1000);
  },
  //发送验证码
  sendCode: function () {
    if (this.data.codeText != '获取验证码') return;
    this.countdown(60);
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
})