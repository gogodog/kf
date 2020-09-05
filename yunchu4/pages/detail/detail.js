// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    targetItem:{},
    cardCur: 0,
    swiperCard:[{type:'image'},{type:'video'},{type:'image'}]
  },
  onLoad: function(option) {
    let item = wx.getStorageSync('street.page.item');
    if(item)//详情页面
      this.setData({targetItem: item})
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
})