const app = getApp();
Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Array,
      default:[]
    },
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
    Custom: app.globalData.Custom
  },
  /**
   * 组件的方法列表
   */
  methods: {
    TabChangeEvent(e){
      console.log(e)
      this.triggerEvent("iclick", {
        id: e.currentTarget.dataset.id
      })
    }
  }
})
