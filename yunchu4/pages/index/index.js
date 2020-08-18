import {HttpModel} from '../../api/httpModel'
let reqModel = new HttpModel();
var imagess = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597151382586&di=a65985f98701b3232172f90a89763a9e&imgtype=0&src=http%3A%2F%2Fimg.ewebweb.com%2Fuploads%2F20191231%2F10%2F1577759575-COAacTqFYk.jpg";
Page({
  onLoad:function(){
    reqModel.getTest(
      (res) => {
        console.log("getTestHTTP:", res)
      }
    )
  },
  data: {
    current: '1',
    dataSet: [{
        id: '5b61575a4256350d332d03a1',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
        content: 'Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: 'Lorem ipsum dolLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit amor sit am'
        },
        likedCount: 122,
        liked: true,
        images: [
          imagess, imagess
        ]
      },
      {
        id: '123123123',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        likedCount: 0,
        liked: true
      },
      {
        id: '5b61575a4256weqwe350d332d03a1',
        content: 'Lorem ipsum dolor sit amet,  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      },
      {
        id: '5b61575a42dasda56350d332d03a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      },
      {
        id: '5b61575weweqa4256350d332d03a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0,
        images: [imagess]
      }
    ],
    brick_option: {
      showFullContent: true,
      // backgroundColor:"#16A085",
      // forceRepaint: true,
      defaultExpandStatus: true,
      // imageFillMode:'aspectFill'
      // columns: 3
      // icon: {
      //   fill: 'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
      //   default:'https://images.ifanr.cn/wp-content/uploads/2018/08/640-90-1024x576.jpeg',
      // },
      // fontColor:'black'
    },
    imgUrls: [{
      link: '/pages/index/index',
      url: 'http://img95.699pic.com/photo/50037/1290.jpg_wh860.jpg',
      title: '夏日水果盘系'
    }, {
      link: '/pages/list/list',
      url: 'http://img95.699pic.com/photo/50161/5020.jpg_wh860.jpg',
      title: '野味山药'
    }, {
      link: '/pages/list/list',
      url: 'http://img95.699pic.com/photo/50055/0952.jpg_wh860.jpg',
      title: '猛兽与肉'
    }],
    indicatorDots: true, //小点
    indicatorColor: "white", //指示点颜色
    activeColor: "coral", //当前选中的指示点颜色
    autoplay: false, //是否自动轮播
    interval: 3000, //间隔时间
    duration: 1000, //滑动时间
  },
  onBarChange(e) {
    if(e.detail.key == 2){
      wx.navigateTo({
        url: '../pick/pick',
      })
    }
    if(e.detail.key == 4){
      wx.navigateTo({
        url: '../me/me',
      })
    }
  },
  // 改变卡片展开状态事件的回调
  handleExpand: function (event) {
    console.log(event.detail)
    console.log('expand call back')
  },
  // 点击卡片
  tapCard: function (event) {
    console.log(event.detail)
    console.log('tap card!')
  },

  // 点赞
  handleLike: function (event) {
    console.log(event.detail)
    console.log('like!')
  },

  // 点击用户头像区域
  handleUserEvent: function (event) {
    console.log(event.detail)
    console.log('user!')
  },

  onReachBottom: function () {
    console.log('reach bottom')
    console.log("YYYY:", this.data.dataSet)

    let ds = this.data.dataSet.concat([{
        id: 'F5b2d03a1',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
        content: 'Lnim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: 'imagess',
          userId: 123123123,
          username: 'Lorem ipsum dolor sit am'
        },
        likedCount: 122,
        liked: true,
        images: [imagess]
      },
      {
        id: 'F123123123',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        likedCount: 0,
        liked: true
      },
      {
        id: 'F5b61575a4256weqwe350d332d03a1',
        content: 'Lorem ipsum dolor sit amet,  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      },
      {
        id: 'F5b61575a42dasda56350d332d03a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      },
      {
        id: 'F5b61575weweqa4256350d332d03a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0,
        images: [imagess]
      },
      {
        id: 'F5b61575adas4256350d332d03a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        likedCount: 0,
        liked: true
      },
      {
        id: 'F123da123123',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        likedCount: 0,
        liked: true
      },
      {
        id: 'F532d03a1',
        content: 'Lorem ipsum dion icia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      },
      {
        id: '5b61575a42da3a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      },
      {
        id: 'F5b61575a41236350d332d03a1',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,',
        content: 'Lorem ipsum aliquip ex ea commodo consequat. Duis aute irure doloolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: 'Lorem ipsum dolor sit am'
        },
        likedCount: 122,
        liked: true,
        images: [imagess]
      },
      {
        id: '5basda4256350d332d03a1',
        content: '爱范儿，让未来触手可及。',
        time: 1533106010,
        user: {
          avatar: imagess,
          userId: 123123123,
          username: '知晓妹'
        },
        backgroundColor: '#AF7AC5',
        likedCount: 0
      }
    ]);

    this.setData({
      dataSet: ds
    })
    console.log("XXXX:", this.data.dataSet)
  }
})