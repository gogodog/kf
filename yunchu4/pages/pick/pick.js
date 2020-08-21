import {$wuxDialog} from '../../lib/index';
import {HttpModel} from '../../api/httpModel';
const app = getApp();
const listBtnConfig = [{
  text: '删除',
  style: 'background-color: #108ee9; color: white',
}];
let request_ = new HttpModel();
const icon = 'data:image/png;base64,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'
const buttons = [{
        openType: 'getUserInfo',
        label: 'GetUserInfo',
        icon,
    },
    {
        openType: 'share',
        label: 'Share',
        icon,
    },
    {
        openType: 'contact',
        label: 'Contact',
        icon,
    },
    {
        label: 'View on Demo',
        icon,
    },
]
Page({
  data: {

    types: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center'],
    typeIndex: 3,
    colors: ['light', 'stable', 'positive', 'calm', 'balanced', 'energized', 'assertive', 'royal', 'dark'],
    colorIndex: 4,
    dirs: ['horizontal', 'vertical', 'circle'],
    dirIndex: 0,
    sAngle: 180,
    eAngle: 180,
    spaceBetween: 10,
    buttons,

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
  operateClick: function(e) {
    console.log('operateClick', e.detail)
    if (e.detail.index === 3) {
        wx.switchTab({
            url: '/pages/index/index'
        })
    }
  },
  operateContact: function(e) {
      console.log('operateContact', e)
  },
  operateChange: function(e){
      console.log('operateChange', e)
  },
  submitPick: function(){
    this.inPickName();
  },
  inPickName:function() {
    const alert = (content) => {
        $wuxDialog('#wux-dialog--alert').alert({
            resetOnClose: true,
            title: '提示',
            content: content,
        })
    }
    $wuxDialog().prompt({
        resetOnClose: true,
        placeholder: '请输入菜谱名称',
        maxlength: 10,
        onConfirm(e, response) {
            const content = response ? `菜谱名称: ${response}` : `请输入菜谱名称`
            alert(content)
        },
    })
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
