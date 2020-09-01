import { config } from "./config";
class HTTP{
  getApiurl(){
    return config.api_url;
  }
  getApiurl(uri){
    return config.api_url + "/yapi" + uri;
  }
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
      },
      fail:(res) => {
        this.show_error("异常，请刷新重试");
      }
    })
  }
  show_error(ecode){
    if(!ecode){
      console.log("错误码不存在");
      return;
    }
    wx.showToast({
      icon: 'loading',
      title: ecode
    })
  }
}

export {HTTP}