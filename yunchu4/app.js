import {HttpModel} from './api/httpModel';
let request_ = new HttpModel();
App({
  onLaunch: function () {
    request_.wxlogin();
    wx.setBackgroundFetchToken({
      token: '9099e29e023'
    })


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
        this.setWinHeight(res)
        this.setGlobalColorUI(res)
      },
    });
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  setWinHeight: function(res){
    let clientHeight = res.windowHeight;
    let clientWidth = res.windowWidth;
    let rpxR = 750 / clientWidth;
    let calc = clientHeight * rpxR - 406;
    this.globalData.winHeight = calc;
  },
  setGlobalColorUI: function(e){
    this.globalData.StatusBar = e.statusBarHeight;
    let capsule = wx.getMenuButtonBoundingClientRect();
    if (capsule) {
      this.globalData.Custom = capsule;
      this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
    } else {
      this.globalData.CustomBar = e.statusBarHeight + 50;
    }
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
    nabbootomMap: [
      "/pages/index/index",
      "/pages/street/street",
      "/pages/pick/pick",
      "/pages/todo/todo",
      "/pages/me/me"
    ]
  },
});
