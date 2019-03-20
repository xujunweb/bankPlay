const app = getApp()

Component({
  data:{
    password: '',
  },
  properties: {
    isShowPayInput: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
      }
    },
    focus: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
      }
    },
  },
  methods: {
    getBoardHeight(e) {
      // if(this.data.translateY) return
      this.setData({
        translateY: e.detail.height ? e.detail.height : 0
      })
    },
    emptyBoardHeight() {
      this.setData({
        translateY: wx.getSystemInfoSync().windowHeight
      })
      this.closeDialog()
    },
    setPayPass(e) {
      this.setData({
        password: e.detail.value
      }, () => {
       this.data.password.length >=6 && this.sendPayPassSubmit() 
      })
      
    },
    //密码输入完成
    sendPayPassSubmit () {
      
      var val = this.data.password;
      // var that = this;
      // this.triggerEvent('inputComplete', { pwd: val });
      //开始支付
      this.startPay(val)
      setTimeout(()=>{
        this.setData({ isShowPayInput: false, focus: false, password: '' });
      },0);
    },
    //开始支付
    startPay (pwd){
      console.log('支付密码',pwd)
      //支付失败
      if(true){
        wx.showModal({
          content: '支付密码错误',
          cancelText: '取消',
          confirmColor: '#ff7800',
          confirmText: '重新输入',
          success: (data) => {
            if (data.confirm) {
              this.setData({ focus: true, isShowPayInput: true })
            } else {
              
            }
          }
        })
      }
    },
    /**
     * 忘记密码，跳转到安全中心页面
     */
    forgetPass() {
      wx.navigateTo({
        url: '/subPackage/my/pages/vip_security_center/vip_security_center?forget=1',
      })
    },
    closeDialog() {
      this.triggerEvent('closeDialog')
    },
    setFocus() {
      this.setData({
        focus: true
      })
    },
  }
})