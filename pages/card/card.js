// pages/card/card.js
import bankCheck from '../../utils/blank.js'
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bank:'', //银行卡号
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
  // 卡号输入
  changeInput:function (e){
    this.setData({
      bank:e.detail.value
    })
  },
  //下一步(校验卡号)
  next:function (){
    console.log(bankCheck(this.data.bank))
    var result = bankCheck(this.data.bank)
    if (result === 'error'){
      wx.showToast({
        title: '银行卡有误',
        icon:'none',
      })
      return
    }
    if (result.cardType !== 'DC'){
      wx.showToast({
        title: '只支持储蓄卡',
        icon: 'none',
      })
      return
    }
    app.globalData.bankInfo = { ...result, bank: this.data.bank}
    wx.navigateTo({
      url: '/pages/info/info',
    })
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