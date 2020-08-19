import { config } from "./config";
class HTTP{
  request(params){
    if(!params.method){
      params.method = 'GET';
    }
    wx.request({
      url: config.api_url + params.url,
      method: params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appKey':config.appKey
      },
      success:(res) => {
        let statusCode = res.statusCode;
        if(statusCode === 200){
          params.success && params.success(res.data);
        }else{
          this.show_error(res.errMsg);
        }
      }
    })
  }
  show_error(ecode){
    if(!ecode){
      console.log("错误码不存在");
      return;
    }
    wx.showToast({
      title: ecode
    })
  }
}

export {HTTP}