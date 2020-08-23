import {HTTP} from './http'
class ServerApi extends HTTP{
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
  searchCbookListByStatus(param, callBack){
    param.size = 5;
    this.request({
      url:"/yapi/yc-cookbook/list/status",
      data:param,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }

}
export {ServerApi};