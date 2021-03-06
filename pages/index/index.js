//index.js
//获取应用实例
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    order:'',
    money:0,
    modal:false,    //弹窗
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //登录
    app.getOpenId()
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
    this.setData({
      order: app.globalData.order,
      money: app.globalData.money,
    })
  },
  // 确认支付(打开弹窗)
  openModal:function(){
    this.setData({
      modal: true
    })
  },
  //关闭弹窗
  closeModal:function(){
    this.setData({
      modal: false
    })
  },
  //跳转银行卡填写
  goCard:function(){
    this.closeModal()
    wx.navigateTo({
      url: '/pages/card/card',
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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
  onShareAppMessage: function (e) {
  }
})
