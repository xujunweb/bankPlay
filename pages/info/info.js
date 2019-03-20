// pages/info/info.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bank:'',    //银行
    type:'',    //银行卡类型
    name:'',    //姓名
    idcard:'',  //身份证号
    phone:'',   //手机号
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
    this.setData({
      bank: app.globalData.bankInfo.bankName,
      type: app.globalData.bankInfo.cardTypeName
    })
  },
  // 输入内容
  changeInput:function(e) {
    var obj = {}
    obj[e.currentTarget.dataset.type] = e.detail.value
    this.setData(obj)
  },
  //下一步
  next:function(){
    if(!this.data.name){
      wx.showToast({
        title: '请填写姓名',
        mask: true,
        icon: 'none'
      })
      return
    }
    //手机号校验规则
    var phone = /^[1][3,4,5,7,8,9][0-9]{9}$/
    //身份证号检验规则
    var idcard = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
    if (!idcard.test(this.data.idcard)){
      wx.showToast({
        title: '身份证号格式错误',
        mask: true,
        icon:'none'
      })
      return
    }
    if (!phone.test(this.data.phone)){
      wx.showToast({
        title: '手机号格式错误',
        mask:true,
        icon: 'none'
      })
      return
    }
    //将信息记录到全局
    app.globalData.userInfo = {
      ...app.globalData.userInfo,
      name:this.data.name,
      idcard:this.data.idcard,
      phone:this.data.phone
    }
    
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