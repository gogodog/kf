import { config } from "./config";
import {Login} from './login';
let login = new Login();

class HTTP{
  request(params){
    let sessionKey = this.getSessionKey(params);
    params = this.initParams(params);
    this.wxRequest(params,sessionKey);
  }
  reRequest(params){
    login.LoginProcess(res=>{
      let sessionKey = this.getSessionKey(params);
      this.wxRequest(params,sessionKey)
    });
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
        if(res.statusCode === 200){
          if(res.data.code === '40201'){
            this.show_error("加载中");
            this.reRequest(params);
          }else if(res.data.code === '30001'){
            this.show_error("服务异常");
          }else{
            params.success && params.success(res.data);
          }
        }else{
          this.show_error("加载中");
        }
      },
      fail:(res) => {
        this.show_error("请刷新重试");
      }
    })
  }
  show_error(ecode){
    if(!ecode){
      return;
    }
    wx.showToast({
      icon: 'loading',
      title: ecode,
      mask: true
    })
  }
}

export {HTTP}