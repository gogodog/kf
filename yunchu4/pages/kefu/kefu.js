import {Chat} from '../../api/chat'
import {formatTime} from '../../utils/util'
let chat = new Chat();
let appInst =  getApp();
let wxs = null;
let userId = 'wenjiadong';
Page({
  data: {
    StatusBar: appInst.globalData.StatusBar,
    CustomBar: appInst.globalData.CustomBar,
    InputBottom: 0,

    msgInput:'',
    //status ==> 0:发送成功 1:发送失败 2:对方撤销 3:自己撤销 4:拒收 5:不是好友关系 6:接收成功
    //type   ==> 0:文字 1:图片 2:语音 3:定位
    chats:[{msg:"HHHi",time:"00:0X",status:0, type:0, self:true}]
  },
  msgInput:function(e){
    var ival = e.detail.value;
    console.log(ival);
    this.setData({
      msgInput: ival
    })
  },
  onLoad:function(){
    this.createChat();
    //this.moca();
  },
  moca: function(){
    let chats = this.data.chats;
    let moca = [
      {msg:"Hi, 这是我的聊天室-发送成功",time:"13:23",status:0, type:0, self:true},
      {msg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598384984908&di=80ef9f5afb3a612f53c5a64c9ff606cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F01%2F90%2F7b96b74a0a2b615089859de45551ecc0.jpg",time:"13:23",status:0, type:1, self:true},
      {msg:"Hi, 这是我的聊天室-发送失败",time:"13:24",status:1, type:0, self:true},
      {msg:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598384984908&di=80ef9f5afb3a612f53c5a64c9ff606cb&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F01%2F90%2F7b96b74a0a2b615089859de45551ecc0.jpg",time:"13:23",status:1, type:1, self:true},
      {msg:"Hi, 这是我的聊天室-对方撤销",time:"13:25",status:2, type:0, self:false},
      {msg:"Hi, 这是我的聊天室-自己撤销",time:"13:26",status:3, type:0, self:true},
      {msg:"Hi, 这是我的聊天室-自己撤销",time:"13:26",status:3, type:0, self:true},

      {msg:"Hi, 这是我的聊天室-发送定位",time:"13:26",status:0, type:3, self:true},
      {msg:"Hi, 这是我的聊天室-发送定位",time:"13:26",status:0, type:2, self:true},

      {msg:"Hi, 这是我的聊天室-对方拒收",time:"13:27",status:4, type:0, self:false},
      {msg:"Hi, 这是我的聊天室-不是好友",time:"13:28",status:5, type:0, self:false},
      {msg:"Hi, 我是你的好朋友",time:"13:29",status:6, type:0, self:false}
    ]
    for(let i = 0 ; i< moca.length ; i++){
      chats.push(moca[i]);
    }
    this.setData({
      chats: chats
    })
  },
  setChats: function(msg){
    let chats = this.data.chats;
    chats.push(msg)
    this.setData({
      chats:chats,
      msgInput:''
    })
  },
  onUnLoad:function(){
    this.closeChat()
  },
  leaveover:function(){
    this.closeChat()
  },
  createChat: function(){
    wxs = chat.startConnect(userId,this.openCk, this.erCk, this.msgCk, this.closeCk);
  },
  openCk:function(msg){
    msg.self=false;
    console.log("chat open:",msg)
    this.setChats(msg);
  },
  erCk:function(res){
    console.log("chat err:",res)
  },
  msgCk:function(res){
    console.log("recive msg:",res)
    this.setChats(res);
  },
  closeCk:function(){
    console.log("chat close:")
  },
  sendTextMessage:function(e){
    let msg = this.data.msgInput;
    let m = {msg:msg,time:formatTime(new Date()),status:0, type:0, from:userId, to:userId, self:true};
    let rec = this.chatMessage(m);
  },
  chatMessage: function(msg){
    if(!wxs || wxs.readyState != wxs.OPEN){
      this.createChat();
    }
    chat.sendOne(wxs, msg, 
      (ok)=>{
        this.setChats(msg);
      },
      (err)=>{
        msg.status = 1;
        this.setChats(msg);
      }
    )
  },
  closeChat: function(){
    console.log("closed")
    chat.closeOne(wxs);
  },
  InputFocus(e) {
    this.setData({
      InputBottom: e.detail.height
    })
  },
  InputBlur(e) {
    this.setData({
      InputBottom: 0
    })
  }
})