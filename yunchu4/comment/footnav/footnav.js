const NavItem = [
  {path:"/pages/index/index", isback:false},
  {path:"/pages/street/street", isback:false},
  {path:"/pages/pick/pick", isback:true},
  {path:"/pages/todo/todo", isback:false},
  {path:"/pages/me/me", isback:false},
  {path:"/pages/findex/findex", isback:false}
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
      let targetItem = NavItem[cur];
      if(!targetItem && this.data.tabCur == cur){
        return;
      }
      if(targetItem.isback){
        wx.navigateTo({
          url: targetItem.path,
        })
      }else{
        wx.redirectTo({
          url:targetItem.path
        });
      }
      this.setData({
        tabCur:cur
      })
    }
  }
})