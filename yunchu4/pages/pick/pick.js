import {
  $wuxToptips
} from '../../lib/index';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    winHeight: "", //窗口高度
    currentTab: '0', //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{}],
    popvisible: false,
    sliderType: '',
    sliderRank: [1,1],
    shiCai: [],
    tiaoLiao: [],
    sliderValue: [],
    currentItem_id: -1,
    currentItem_img: '',
    currentItem_type: '',
    currentItem_weight: [1,1],
    modifyId: -1
  },
  choseSource: function (e) {
    this.setData({
      sliderRank:[1,1],
      sliderType: e.currentTarget.dataset.vau,
      popvisible: true,
      currentItem_id: e.currentTarget.dataset.id,
      currentItem_img: e.currentTarget.dataset.img,
      currentItem_type: e.currentTarget.dataset.type
    })
  },
  preModifySource: function (e) {
    this.setData({
      currentItem_type: e.currentTarget.dataset.type,
      sliderType: e.currentTarget.dataset.vau,
      popvisible: true,
      modifyId: e.currentTarget.dataset.id,
      sliderRank: e.currentTarget.dataset.rank
    })
  },
  onSliderChange(e) {
  },
  afterSliderChange(e) {
    this.setData({
      currentItem_weight: e.detail.value
    })
  },
  sourceHandler: function (e) {
    if (this.data.modifyId >= 0){
      this.modifySource(e);
    }else{
      this.addSource(e);
    }
    this.closeSource(e);
  },
  modifySource: function (e) {
    if (this.data.currentItem_weight && this.data.currentItem_weight.length != 0) {
      let modId = this.data.modifyId;
      if (modId >= 0) {
        if (this.data.currentItem_type == 1) {
          let inData = this.data.shiCai;
          inData.map((item) => {
            if (item.id == modId) {
              item.weight = this.data.currentItem_weight;
              return;
            }
          })
          this.setData({
            shiCai: inData
          })
        }
        if (this.data.currentItem_type == 2) {
          let inData = this.data.tiaoLiao;
          inData.map((item) => {
            if (item.id == modId) {
              item.weight = this.data.currentItem_weight;
              return;
            }
          })
          this.setData({
            tiaoLiao: inData
          })
        }
      }
    }
  },
  addSource: function (e) {
    if (this.data.currentItem_weight && this.data.currentItem_weight.length != 0) {
      let choosed = {
        id: this.data.currentItem_id,
        img: this.data.currentItem_img,
        weight: this.data.currentItem_weight,
        type: this.data.currentItem_type
      };
      if (this.data.currentItem_type == 1) {
        let shicaii = this.data.shiCai;
        let isED = false;
        shicaii.map((item, intdex) => {
          if (item.id == this.data.currentItem_id) {
            isED = true;
            return;
          }
        });
        if (!isED) {
          shicaii.push(choosed);
          this.setData({
            shiCai: shicaii
          })
        } else {
          this.showtipswarn("不能重复添加");
        }
      }
      if (this.data.currentItem_type == 2) {
        let tiliaoo = this.data.tiaoLiao;
        let isED = false;
        tiliaoo.map((item, intdex) => {
          if (item.id == this.data.currentItem_id) {
            isED = true;
            return;
          }
        });
        if (!isED) {
          tiliaoo.push(choosed);
          this.setData({
            tiaoLiao: tiliaoo
          })
        } else {
          this.showtipswarn("不能重复添加");
        }
      }
    } else {
      this.showtipswarn("重量不变");
    }
  },
  closeSource: function (e) {
    this.setData({
      popvisible: false,
      silierType: '',
      currentItem_type: '',
      currentItem_id: -1,
      currentItem_img: '',
      modifyId: -1,
      sliderRank: [1,1]
    })
    console.log(this.data)
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTab == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  onLoad: function () {
    var that = this;
    var success = function (res) {
      let clientHeight = res.windowHeight;
      let clientWidth = res.windowWidth;
      let rpxR = 750 / clientWidth;
      let calc = clientHeight * rpxR - 256;
      that.setData({
        winHeight: calc
      });
    }
    wx.getSystemInfo({
      success: success
    });
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    this.setData({
      scrollLeft: this.data.currentTab > 3 ? 300 : 0
    })
  },
  showtipswarn: function (tip) {
    $wuxToptips('#wux-toptips').warn({
      hidden: false,
      text: tip,
      duration: 3000,
      success() {},
    })
  }
})