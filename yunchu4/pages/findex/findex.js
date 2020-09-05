import {
  ServerApi
} from '../../api/serverapi'
import {
  appendArry
} from '../../utils/util'
let sapi = new ServerApi();
let appInst = getApp();
const Tabs = [{name:"关注",index:"0"}, {name:"推荐",index:"1"}];
Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
    Tabs,
    TabCur:0,
    attionList:[],
    recommendList:[],
  },
  onReady: function() {
    this.refreshOnload();
  },
  appendList: function(data) {
    let cur = this.data.TabCur;
    if(cur == 0){
      this.appendAttionList(data);
    }else if(cur == 1){
      this.appendRecommendList(data);
    }
  },
  appendRecommendList:function(data) {
    this.setData({
      recommendList: appendArry(this.data.recommendList, data)
    })
  },
  appendAttionList:function(data) {
    this.setData({
      attionList: appendArry(this.data.attionList, data)
    })
  },
  tabChange: function(e) {
    console.log("tagChange:", e)
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  },
  refreshOnload: function() {
    let that = this;
    sapi.getStreetList({type: this.data.TabCur},
      res=>{
        if(res.code == "200" && res.data.length > 0)
          that.appendList(res.data);
      }
    )
  },
})