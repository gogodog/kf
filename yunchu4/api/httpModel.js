import {HTTP} from './http'
class HttpModel extends HTTP{
  getTest(callBack){
    this.request({
      url:"/yapi/test/users?s=3&p=1",
      success:(res) => {
        callBack(res)
      }
    });
  }
  login(code, callBack){
    this.request({
      url:"/yapi/min/proxy/login?code="+code,
      success:(res)=>{
        console.log(res.code)
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
}
export {HttpModel};