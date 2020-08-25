const app = getApp();
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
    bgColor: {
      type: String,
      default: ''
    },
    tabs:{
      type:Array,
      default:[]
    },
    tabCur:{
      type:Number,
      default:0
    },
    bgStyle: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
    model: {
      type: String,
      default: 'nav'
    },
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
      console.log("c:::", e)
      var detail = {
        id: event.currentTarget.dataset.id
      } 
      // 触发事件的选项
      var option = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent("iclick", detail, option)
    },
    BackPage() {
      wx.navigateBack({
        delta: 1
      });
      this.triggerEvent("over", {}, {})
    },
    toHome(){
      wx.reLaunch({
        url: '/pages/index/index',
      })
    }
  }
})