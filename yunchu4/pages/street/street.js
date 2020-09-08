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
    this.refreshOnload(0);
    this.refreshOnload(1);
  },
  appendList: function(data, cur) {
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
  uattention: function(e){
    let id = e.currentTarget.dataset.id;
    sapi.uattention(id, res=>{
      if(res.code == "200" && res.data){
        this.plusOperate(id, "attion_count");
      }
    });
  },
  ulike: function(e){
    let id = e.currentTarget.dataset.id;
    sapi.ulike(id, res=>{
      if(res.code == "200" && res.data){
        this.plusOperate(id, "like_count");
      }
    });
  },
  plusOperate:function(id, param){
    let list = this.data.TabCur == 0 ? this.data.attionList : this.data.recommendList;
    for(var i = 0 ; i< list.length ; i++){
      let one = list[i];
      if(one.id == id){
        one[param] += 1;
        break;
      }
    }
    this.setData(
      this.data.TabCur == 0 ? {attionList: list} : {recommendList: list}
    )
  },
  ushow: function(e){
    wx.setStorageSync('street.page.item', e.currentTarget.dataset.item);
    wx.navigateTo({
      url: "/pages/detail/detail",
    })
  },
  tabChange: function() {
    let TabCur = this.data.TabCur == 1 ? 0 : 1;
    this.setData({
      TabCur:TabCur
    })
    if((!this.attionList || this.attionList.length == 0) && TabCur == 0){
      this.refreshOnload(0)
    }
    if((!this.recommendList || this.recommendList.length == 0) && TabCur == 1){
      this.refreshOnload(1)
    }
  },
  swipperChange: function(e){
    if(e.detail.current == this.data.TabCur){
      return;
    }
    this.tabChange();
  },
  lowerOnload: function(e){
    this.refreshOnload(this.data.TabCur);
  },
  refreshOnload: function(TabCur) {
    let that = this;
    sapi.getStreetList({type: TabCur},
      res=>{
        if(res.code == "200" && res.data.length > 0)
          that.appendList(res.data, TabCur);
      }
    )
  },
})