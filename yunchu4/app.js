import {HttpModel} from './api/httpModel';
let request_ = new HttpModel();
App({
  onLaunch: function () {
    request_.wxlogin();
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {// 已经授权
          wx.getUserInfo({
            success: (res) => {
              this.globalData.userInfo = res.userInfo;
              console.log(res.userInfo)
            },
          });
        }
      },
    });

    wx.getSystemInfo({
      success: (res) => {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let rpxR = 750 / clientWidth;
        let calc = clientHeight * rpxR - 406;
        this.globalData.winHeight = calc;
      },
    });
  },
  getUserInfo: function (callback) {
    var that = this
    if (this.globalData.userInfo) {
        typeof callback == "function" && callback(this.globalData.userInfo)
    } else {
        wx.getUserInfo({
            success: (res) => {
                that.globalData.userInfo = res.userInfo
                typeof callback == "function" && callback(that.globalData.userInfo)
            }
        })
    }
  },
  globalData: {
    userInfo: "++++",
    winHeight: null,
  },
});
