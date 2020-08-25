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
    //type   ==> 0:文字 1:图片 2:语音 3:定位 4+:异常提醒信息 5+:正常提醒
    chats:[]
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
    let m = {msg:"欢迎进行客服询问！",type:50};
    this.setChats(m);
  },
  erCk:function(res){
    if(this.checkWebSocket()){
      let m = {msg:"服务器中断，请检查网络",type:40};
      this.setChats(m);
    }
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
    if(this.checkWebSocket()){
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
  checkWebSocket: function(){
    return !wxs || wxs.readyState != wxs.OPEN;
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