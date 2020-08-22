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
  foodlistByType(params, callBack){
    let url = "/yapi/yc-food/list/bytype?type="+params.type+"&page="+params.page+"&size=10";
    this.request({
      url:url,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
  foodlistByCnname(type, callBack){
    let url = "/yapi/yc-food/list/bycnname?cnname="+type;
    this.request({
      url:url,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
  seasoninglistByCnname(type, callBack){
    let url = "/yapi/yc-seasoning/list/bycnname?cnname="+type;
    this.request({
      url:url,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
  savePick(param, callBack){
    this.request({
      url:"/yapi/yc-cookbook/new/cookbook",
      method:"POST",
      data:param,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }

}
export {HttpModel};