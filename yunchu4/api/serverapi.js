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
  assistFoodlistByCnname(type, callBack){
    let url = "/yapi/yc-assist-food/list/bycnname?cnname="+type;
    this.request({
      url:url,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
  dishStyleTree(callBack){
    this.request({
      url:"/yapi/yc-dish-style/tree",
      success:(res)=>{
        if(res.code === "200")
          callBack && callBack(res.data);
      }
    });
  }
  publishCookbook(param, callBack, errorBack){
    this.request({
      url:"/yapi/yc-cookbook/publish/cookbook",
      method:"POST",
      data:param,
      success:(res)=>{
        res.code === "200" ? callBack&&callBack(res.data) : errorBack&&errorBack(res.msg);
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
  savePick(param, callBack, errorBack){
    this.request({
      url:"/yapi/yc-cookbook/new/cookbook",
      method:"POST",
      data:param,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }else{
          errorBack(res.msg);
        }
      }
    });
  }
  modifyPick(param, callBack, errorBack){
    this.request({
      url:"/yapi/yc-cookbook/modify/cookbook",
      method:"POST",
      data:param,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }else{
          errorBack(res.msg);
        }
      }
    });
  }
  saveUserInfo(param, callBack){
    param.avatar_url = param.avatarUrl;
    param.nick_name = param.nickName;
    this.request({
      url:"/yapi/user/save/wxinfo",
      method:"POST",
      data:param,
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }else{
          console.log(res)
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
  deleteCookBookById(id, callBack){
    this.request({
      url:"/yapi/yc-cookbook/delete/id?id="+id,
      success:(res)=>{
        callBack(res);
      }
    });
  }
  getStreetList(param, sk){
    param.size = 3;
    this.request({
      url:"/yapi/yc-street/street/list",
      data:param,
      success:(res)=>{
        sk && sk(res);
      }
    });
  }
  uattention(id, sk){
    this.request({
      url:"/yapi/yc-cookbook-attion/attion?cookbookId="+id,
      success:(res)=>{
        sk && sk(res);
      }
    });
  }
  ulike(id, sk){
    this.request({
      url:"/yapi/yc-cookbook-like/like?cookbookId="+id,
      success:(res)=>{
        sk && sk(res);
      }
    });
  }
}
export {ServerApi};