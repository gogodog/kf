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
  wxUploadImg(imgpath, ok, fail){
    let url = this.getApiurl('/store/upload/img');
    console.log(url)
    wx.uploadFile({
      url: url,
      filePath: imgpath,
      name: 'img',
      header: {'content-type': 'multipart/form-data'},
      success: function (res) {
        if(res.statusCode == 200){
          let data = JSON.parse(res.data);
          if(data.code == '200'){
            ok && ok(data.data)
          }
        }
      },
      fail: function (res) {
        fail && fail(res)
      }
     })
  }
  asyncUploadImages(imgpath, ok, fail){
    let url = this.getApiurl('/store/upload/img');
    return new Promise(function () {
      //上传主题图片 一次只能上传一张好恶心
        wx.uploadFile({
          url: url,
          filePath: imgpath,
          name: 'img',
          async: false,
          success: function (res) {
            if(res.statusCode == 200){
              let data = JSON.parse(res.data);
              if(data.code == '200'){
                ok && ok(data.data)
              }
            }
          },
          fail: function (res) {
            fail && fail(res)
          }
        })
      })
  }
}
export {HttpModel};