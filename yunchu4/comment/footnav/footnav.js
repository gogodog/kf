const NavItem = [
  "/pages/index/index",
  "/pages/street/street",
  "/pages/pick/pick",
  "/pages/todo/todo",
  "/pages/me/me",
  "/pages/findex/findex",
];

Component({
  options: {
    addGlobalClass: true
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
    tabCur:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    NavChnavBottomChangeange: function(e){
      let cur = e.currentTarget.dataset.cur;
      if(this.data.tabCur == cur){
        return;
      }
      wx.redirectTo({
        url:NavItem[cur]
      });
      this.setData({
        tabCur:cur
      })
    }
  }
})