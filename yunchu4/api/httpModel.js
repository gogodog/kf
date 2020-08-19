import {HTTP} from './http'
class HttpModel extends HTTP{
  login(code, callBack){
    this.request({
      url:"/yapi/min/proxy/login?code="+code,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
  wxlogin(callBack){
    let that = this;
    return wx.login({
          success: (res) => {
            that.login(res.code, (res)=>{
              wx.setStorage({
                key:'userInfo',
                data:res
              })
              wx.setStorage({
                key:'userKey',
                data:res.uucode
              })
            });
          }
        });
  }
  foodlist(params, callBack){
    let url = "/yapi/new/cbook/foodlist?type="+params.type+"&page="+params.page+"&size=10";
    this.request({
      url:url,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }

}
export {HttpModel};