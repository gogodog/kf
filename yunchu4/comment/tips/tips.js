Component({
    /**
     * 组件的初始数据
     */
    data: {
      showTopTips: true,
      msg: '提示'
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      showTopTip: function(msg) {
        let that = this;
        that.setData({
          showTopTips: false,
          msg: msg
        });
        setTimeout(function() {
          that.setData({
            showTopTips: true
          });
        }, 2000);
      }
    }
  })