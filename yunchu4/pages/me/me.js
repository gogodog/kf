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
    }]
  },
  NavChnavBottomChangeange: function(e){
    new CommonFuc().NavChnavBottomChangeange(e)
  },
  gotoPage: function(e){
    console.log("GoTo:", e)
    wx.navigateTo({
      url: e.currentTarget.dataset.goto,
    })
  }
})