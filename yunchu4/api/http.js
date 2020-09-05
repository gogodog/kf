import { config } from "./config";
import {Login} from './login';
let login = new Login();

class HTTP{
  request(params){
    let sessionKey = this.getSessionKey(params);
    if(!sessionKey){//重新登录
      login.LoginProcess();
    }
    params = this.initParams(params);
    this.wxRequest(params,sessionKey);
  }
  reRequest(params){
    let sessionKey = this.getSessionKey(params);
    if(!sessionKey){//重新登录
      login.LoginProcess();
    }
    this.wxRequest(params,sessionKey);
  }
  getSessionKey(params){
    var loginUser = wx.getStorageSync('loginUser')
    let sessionKey = null;
    if(params.url.indexOf("/min/proxy/login") < 0 || loginUser){
      sessionKey = loginUser.session_key;
    }
    return sessionKey;
  }
  initParams(params){
    if(!params.method)
      params.method = 'GET';
    return params;
  }
  getYApiurl(uri){
    return config.api_url + "/yapi" + uri;
  }
  geturl(uri){
    return config.api_url + uri;
  }
  wxRequest(params, sessionKey){
    wx.request({
      url: this.geturl(params.url),
      method: params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'sessionKey':sessionKey
      },
      success:(res) => {
        if(res.statusCode === 200 && res.data.code !== '40201'){
          params.success && params.success(res.data);
        }else if(res.statusCode === 200 && res.data.code === '40201'){
          this.reRequest(params);
        }else{
          this.show_error(res.errMsg);
        }
      },
      fail:(res) => {
        this.show_error("异常，请刷新重试");
      }
    })
  }
  show_error(ecode){
    if(!ecode){
      return;
    }
    wx.showToast({
      icon: 'loading',
      title: ecode
    })
  }
}

export {HTTP}