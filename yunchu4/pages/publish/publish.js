import {ServerApi} from '../../api/serverapi'
let sapi = new ServerApi();
let appInst =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ColorList: appInst.globalData.ColorList,
    tagModel:true,
    tagTree:[]
  },
  onShow: function(e){
    sapi.dishStyleTree((res)=>{
      console.log(res)
      this.setData({
        tagTree:res
      })
    });
  },
  checkTag(e){
    this.setData({
      tagModel: !this.data.tagModel
    })
  },
})