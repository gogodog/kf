import {$wuxToptips} from '../../lib/index';
import {HttpModel} from '../../api/httpModel';
const app = getApp();
const listBtnConfig = [{
  text: '删除',
  style: 'background-color: #108ee9; color: white',
}];
let request_ = new HttpModel();

Page({
  data: {
    right: listBtnConfig,
    winHeight: app.globalData.winHeight,
    currentTab: '0',
    scrollLeft: 0,
    popvisible: false,
    shiCai: [],
    category: [
      {i: 1, name: '蔬菜', list: [], page: 0, loadState: 0},
      {i: 2, name: '水果', list: [], page: 0, loadState: 0},
      {i: 3, name: '海鲜', list: [], page: 0, loadState: 0},
      {i: 4, name: '家禽', list: [], page: 0, loadState: 0},
      {i: 5, name: '面食', list: [], page: 0, loadState: 0},
      {i: 6, name: '调料', list: [], page: 0, loadState: 0},
    ],
  },
  clickStep: function(){
    console.log("step:1")
  },
  onShow: function () {
    this.getItems(this.data.currentTab);
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    if (this.data.currentTab === e.detail.current) {
      return;
    }
    this.getItems(e.detail.current);
    this.setData({
      currentTab: e.detail.current,
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.getItems(cur);
      this.setData({
        currentTab: cur,
      });
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    this.setData({
      scrollLeft: this.data.currentTab > 3 ? 300 : 0,
    });
  },
  showtipswarn: function (tip) {
    $wuxToptips('#wux-toptips').warn({
      hidden: false,
      text: tip,
      duration: 3000,
      success() {},
    });
  },
  getItems: function (index) {
    let itemInfo = this.data.category;
    if (itemInfo[index].loadState == 2) {
      return;
    }
    itemInfo[index].loadState = 1;
    this.setData({
      category: itemInfo,
    });
    request_.foodlist(
      {
        type: itemInfo[index].i,
        page: itemInfo[index].page + 1,
      },
      (res) => {
        let category_ = this.data.category;
        if (res.length == 0) {
          category_[index].loadState = 2;
          this.setData({category: category_});
          return;
        }
        for (let i = 0; i < res.length; i++) {
          category_[index].list.push(res[i]);
        }
        category_[index].page = itemInfo[index].page + 1;
        category_[index].page;
        this.setData({
          category: category_,
        });
      }
    );
  },
  itemScrolltolower: function (e) {
    this.getItems(e.target.dataset.index);
  },
  //添加食材按钮
  addPick: function(e){
    console.log("添加按钮", e.target.dataset.row);
  }
});
