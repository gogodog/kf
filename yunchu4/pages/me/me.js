// pages/me/me.js
const bottomLogo = "../../img/yunchu.gif";
Page({
  data:{
    bottomLogo
  },
  gotoPage: function(e){
    console.log("GoTo:", e)
    wx.navigateTo({
      url: e.currentTarget.dataset.goto,
    })
  }
})