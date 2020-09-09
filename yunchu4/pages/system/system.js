let appInst = getApp();
import {
  ServerApi
} from '../../api/serverapi'
let sapi = new ServerApi();
Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
  },
  onGetUserInfo: function (e) {
    console.log(e)
    let userInfo = e.detail.userInfo;
    if (userInfo) {
      sapi.saveUserInfo(userInfo, res=>{
        console.log(res);
        let loginUser = wx.getStorageSync('loginUser');
        loginUser.user = res;
        wx.setStorage({data: loginUser, key: 'loginUser'})
      })
      wx.navigateBack({delta: 1,})
    }
  }
})