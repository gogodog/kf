Component({
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
        url:this.data.NavItem[e.currentTarget.dataset.cur]
      });
      this.setData({
        tabCur:e.currentTarget.dataset.cur
      })
    }
  }
})