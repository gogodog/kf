import {ServerApi} from '../../api/serverapi'
import {$wuxDialog, $wuxToast} from '../../lib/index'

let appInst =  getApp();
let sapi = new ServerApi();
const Tabs = [{name:"未发布",index:"0"}, {name:"已发布",index:"1"}, {name:"已删除",index:"2"}];

Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
    Tabs,
    tabCurrent:0,
    contentlist:[
      {rows:[], page:1},
      {rows:[], page:1},
      {rows:[], page:1}
    ]
  },
  onShow: function(){
    this.refreshListAll();
  },
  setContentList: function(contentlist){
    this.setData({contentlist})
  },
  tabChange: function(e, v){
    let id = e ? e.currentTarget.dataset.id : v;
    if(id != this.data.tabCurrent){
      this.setTabCurrent(id);
      let page = this.data.contentlist[id].page;
      this.searchCbookList(id, page);
    }
  },
  searchCbookList: function(status, page){
    let params = {};
    params.status = status;
    params.current = page;
    sapi.searchCbookListByStatus(params, (res)=>{
      if(!res || res.length == 0){
        return;
      }
      let contentlist = this.data.contentlist;
      let rows = contentlist[status].rows;
      for(var i = 0 ; i<res.length ; i++){
        rows.push(res[i]);
      }
      let content = {
        rows: rows,
        page: page+1
      }
      contentlist[status] = content;
      this.setContentList(contentlist);
    });
  },
  predeleteCookBook: function(e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    $wuxDialog().confirm({
        content: '确定要删除【'+e.currentTarget.dataset.name+'】吗？',
        onConfirm(e) {
            that.deleteCookBook(id);
        }
    })
  },
  deleteCookBook: function(id){
    sapi.deleteCookBookById(id, (res)=>{
      if(res.code == 200){
        this.refreshListAll();
        this.showToastSuccess("已删除")
      }else{
        this.showToastError(res.msg)
      }
    });
  },
  refreshList: function(){
    let contentlist = this.data.contentlist;
    let status = this.data.tabCurrent;
    contentlist[status].rows = [];
    contentlist[status].page = 1;
    this.setContentList(contentlist);
    this.searchCbookList(status, 1)
  },
  refreshListAll: function(){
    let contentlist = this.data.contentlist;
    for(var i = 0 ; i< contentlist.length ; i++){
      contentlist[i].rows = [];
      contentlist[i].page = 1;
    }
    this.setContentList(contentlist);
    for(var i = 0 ; i< contentlist.length ; i++){
      this.searchCbookList(i, 1)
    }
  },
  modifyCookBook: function(e){
    this.navigateTo('../pick/pick?operate=edit', e);
  },
  publishCookBook: function(e){
    this.navigateTo('../publish/publish?operate=publish', e);
  },
  navigateTo: function(path, e) {
    wx.setStorageSync('cookbooklist.page.item', e.currentTarget.dataset.item);
    wx.navigateTo({
      url:path
    })
  },
  hotload: function(){
    let status = this.data.tabCurrent;
    let page = this.data.contentlist[status].page;
    this.searchCbookList(status, page);
  },
  showToastError(errmsg, ck){
    this.showToast(errmsg, ck, 'forbidden')
  },
  showToastSuccess(errmsg, ck){
    this.showToast(errmsg, ck, 'success')
  },
  showToast(errmsg, ck, type) {
    $wuxToast().show({
        type: type,
        duration: 1500,
        color: '#fff',
        text: errmsg,
        success: () => {ck&&ck()}
    })
  },
  swipperChange: function(e){
    if(e.detail.current != this.data.tabCurrent)
      this.tabChange(null, e.detail.current)
  },
  setTabCurrent:function(tabCurrent){
    this.setData({tabCurrent})
  }
})