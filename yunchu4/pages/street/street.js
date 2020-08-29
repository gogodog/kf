let appInst = getApp();
const Tabs = [{name:"关注",index:"0"}, {name:"食街",index:"1"}];
Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
    Tabs,
    TabCur:0
  },
  tabChange: function(e) {
    console.log("tagChange:", e)
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  }
})