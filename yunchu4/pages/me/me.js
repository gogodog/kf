import { CommonFuc } from "../../api/common";
const bottomLogo = "../../img/yunchu.gif";
let appInst = getApp();
Page({
  data:{
    bottomLogo,
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: '订单',
      url: ''
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '收藏夹',
      url: ''
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '菜谱',
      url: '../cookbooklist/cookbooklist'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '待付款',
      url: ''
    }],
    user:{}
  },
  onLoad: function() {
    let user = this.getLoginUser();
    return user ? this.setData({user:user}) : wx.navigateTo({url: "/pages/system/system"})
  },
  getLoginUser: function(){
    let loginUser = wx.getStorageSync('loginUser');
    let user = loginUser ? loginUser.user : null;
    return (!user || !user.wx_head || user.wx_head.length == 0) ? null : user;
  },
  gotoPage: function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.goto,
    })
  }
})