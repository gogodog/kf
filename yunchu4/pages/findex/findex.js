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
  uattention: function(e){
    console.log("uattention-s", e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    sapi.uattention(id, res=>{
      if(res.code == "200" && res.data){
        this.plusOperate(id, "attion_count");
      }
    });
  },
  ulike: function(e){
    console.log("ulike-s", e.currentTarget.dataset.id);
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
        return;
      }
    }
    console.log(list)
    this.setData(
      this.data.TabCur == 0 ? {attionList: list} : {recommendList: list}
    )
  },
  ushow: function(e){
  },
  tabChange: function(e) {
    this.setData({
      TabCur: this.data.TabCur == 1 ? 0 : 1
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