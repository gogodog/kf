let appInst = getApp();
Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
  },

  onGetUserInfo: function (e) {
    console.log(e)
    if (!this.logged && e.detail.userInfo) {
      appInst.globalData.userInfo = e.detail.userInfo;
      wx.switchTab({
        url: '/pages/basics/home/home',
      })
    }
  },

  getsometimescode:function(e){
    wx.login({
      timeout: 0,
    })
  }
    

})