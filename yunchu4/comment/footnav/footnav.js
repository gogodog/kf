const appInst = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    tabCur:{
      type:Number,
      default:0
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    tabCur:0,
    NavItem: [
      "/pages/index/index",
      "/pages/street/street",
      "/pages/pick/pick",
      "/pages/todo/todo",
      "/pages/me/me"
    ]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    NavChnavBottomChangeange: function(e){
      wx.redirectTo({
        url:appInst.globalData.nabbootomMap[e.currentTarget.dataset.cur]
      });
      this.setdata({
        tabCur:e.currentTarget.dataset.cur
      })
    }
  }
})