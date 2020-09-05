import {Login} from './api/login';
let login = new Login();
App({
  onLaunch: function () {
    login.LoginProcess((res)=>{
      this.globalData.userInfo = res.userInfo;
    });
    wx.getSystemInfo({
      success: e => {
        this.setWinHeight(e)
        this.setGlobalColorUI(e)
      }
    })
  },
  setWinHeight: function(res){
    let clientHeight = res.windowHeight;
    let clientWidth = res.windowWidth;
    let rpxR = 750 / clientWidth;
    let calc = clientHeight * rpxR - 406;
    this.globalData.winHeight = calc;
    this.globalData.winHeightX = clientHeight;
  },
  setGlobalColorUI: function(e){
    this.globalData.StatusBar = e.statusBarHeight;
    let capsule = wx.getMenuButtonBoundingClientRect();
    if (capsule) {
      this.globalData.Custom = capsule;
      this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
    } else {
      this.globalData.CustomBar = e.statusBarHeight + 50;
    }
  },
  globalData: {
    userInfo: null,
    winHeight: null,
    winHeightX: null,
    nabbootomMap: [
      "/pages/index/index",
      "/pages/street/street",
      "/pages/pick/pick",
      "/pages/todo/todo",
      "/pages/me/me"
    ],
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
  ]
  },
});
