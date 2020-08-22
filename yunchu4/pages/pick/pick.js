import {$wuxDialog, $wuxNotification} from '../../lib/index';
import {HttpModel} from '../../api/httpModel';
import {isEmptyStr,isEmptyCollection,removeOne} from '../../utils/util'
const app = getApp();
const listBtnConfig = [
  {
    text: '删除',
    style: '',
  },
];
let request_ = new HttpModel();
const icon =
  'data:image/png;base64,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';
const buttons = [
  {
    label: '食材',
    icon,
  },
  {
    label: '调料',
    icon,
  },
];
const swipeBut = [
  {
    text: '取消',
  },
];
const sseasoning_tag=[
  {
    key:"海盐",
    istype:false
  },
  {
    key:"白醋",
    istype:false
  },
  {
    key:"陈醋",
    istype:false
  },
  {
    key:"盐",
    istype:true
  }
];
const sfood_tag=[
  {
    key:"苹果",
    istype:false
  },
  {
    key:"青笋",
    istype:false
  },
  {
    key:"龙虾",
    istype:false
  },
  {
    key:"鸡",
    istype:true
  }
];


Page({
  data: {
    buttons: buttons,
    swipeBut: swipeBut,
    
    //search-food
    sfood_visible: false,
    sfood_key: '',
    sfood_list: [],
    sfood_placeholder: '搜索食材',
    sfood_tag,

    //search-seasoning
    sseasoning_visible: false,
    sseasoning_key: '',
    sseasoning_list: [],
    sseasoning_placeholder: '搜索调料',
    sseasoning_tag,

    //pick content
    content_food: [],
    content_seasoning: [],
    content_attion: '',
    content_method: '',
    content_attion_catch: '',
    content_method_catch: '',
  },
  setSseasoningKey: function(v){
    this.setData({
      sseasoning_key: v
    })
    this.getSeasoningList(v);
  },
  setSfoodKey: function(v){
    this.setData({
      sfood_key: v
    })
    this.getFoodList(v);
  },
  setContentAttion: function (e){
    this.setData({
      content_attion: e.detail.value
    })
  },
  setContentMethod: function (e){
    this.setData({
      content_method: e.detail.value
    })
  },
  setContentFood: function(row){
    let list = this.data.content_food;
    row.weightval = 10;//设置默认重量
    list.push(row);
    this.setData({
      content_food: list,
    });
  },
  setContentSeasoning: function(row){
    let list = this.data.content_seasoning;
    row.weightval = 5;//设置默认重量
    list.push(row);
    this.setData({
      content_seasoning: list,
    });
  },
  removeContentFood: function(id, col){
    let list = this.data.content_food;
    this.setData({
      content_food: removeOne(list, id, col),
    });
  },
  removeContentSeasoning: function(id, col){
    let list = this.data.content_seasoning;
    this.setData({
      content_seasoning: removeOne(list, id, col),
    });
  },
  setSearchVisible: function(foodVisible, seasoningVisible){
    this.setData({
      sfood_visible: foodVisible,
      sseasoning_visible: seasoningVisible,
    });
  },
  operateClickTag: function(e){
    console.log("tag:", e);
    let s = e.currentTarget.dataset.s;
    let skey = e.currentTarget.dataset.skey;
    s == 1 ? this.setSfoodKey(skey) : s == 2 ? this.setSseasoningKey(skey) : "";
  },
  operateDelFood: function(e){
    console.log("delFood:", e);
    this.removeContentFood(e.currentTarget.dataset.id, "id")
  },
  operateDelSeasoning: function(e){
    console.log("delFood:", e);
    this.removeContentSeasoning(e.currentTarget.dataset.id, "id")
  },
  operateClick: function (e) {
    this.setSearchVisible(e.detail.index === 0, e.detail.index === 1);
  },
  searchClose: function () {
    this.setSearchVisible(false, false);
  },
  submitPick: function () {
    let params = {};
    params.content_attion = this.data.content_attion;
    params.content_method = this.data.content_method;
    params.content_food = this.data.content_food;
    params.content_seasoning = this.data.content_seasoning;
    console.log("请求数据：", params)
    this.checkSubmitPick(params)? this.inPickName((name)=>{
      params.name = name;
      request_.savePick(params,(res)=>{
        wx.redirectTo({
          url: '../index/index',
        })
      })
    }) : false;
  },
  checkSubmitPick: function(params){
    if(isEmptyCollection(params.content_food)){
      this.showNotification("请添加食材");
      return false;
    }
    if(isEmptyCollection(params.content_seasoning)){
      this.showNotification("请添加调料");
      return false;
    }
    if(isEmptyStr(params.content_method)){
      this.showNotification("请输入制作方法");
      return false;
    }
    console.log("校验请求数据：", params)
    return true;
  },
  inPickName: function (ck) {
    let that = this;
    const alert = (content) => {
      $wuxDialog('#wux-dialog--alert').alert({
        resetOnClose: true,
        title: '提示',
        content: content,
        onConfirm(e, response) {
          that.inPickName();
        },
      });
    };

    $wuxDialog().prompt({
      resetOnClose: true,
      placeholder: '请输入菜谱名称',
      maxlength: 10,
      onConfirm(e, response) {
        response ? ck(response) : alert(content);
      },
    });
  },
  sfoodTap: function (e) {
    let row = e.currentTarget.dataset.row;
    let list = this.data.content_food;
    return this.isReapt(row, list)?this.showNotification("已经添加此食材"):this.setContentFood(row);
  },
  
  sseasoningTap:function (e) {
    let row = e.currentTarget.dataset.row;
    let list = this.data.content_seasoning;
    return this.isReapt(row, list)?this.showNotification("已经添加此调料"):this.setContentSeasoning(row);
  },
  searchFoodChange: function (e) {
    isEmptyStr(e.detail.value)?!1:this.getFoodList(e.detail.value);
  },
  getFoodList: function (cname) {
    request_.foodlistByCnname(cname, (res) => {
      if (isEmptyCollection(res)) {
        return;
      }
      this.setData({
        sfood_list: res,
      });
    });
  },
  searchSeasoningChange: function (e) {
    isEmptyStr(e.detail.value)?!1:this.getSeasoningList(e.detail.value);
  },
  getSeasoningList: function (cname) {
    request_.seasoninglistByCnname(cname, (res) => {
      if (isEmptyCollection(res)) {
        return;
      }
      this.setData({
        sseasoning_list: res,
      });
    });
  },
  showNotification: function(msg) {
    $wuxNotification().show({
      text: msg,
      duration: 2000
    });
  },
  isReapt: function(row, list){
    let r = false;
    if(list.length != 0){
      list.map((item) => {
        if (item.id == row.id){
          r = true;
          return;
        }
      });
    }
    return r;
  },
});
