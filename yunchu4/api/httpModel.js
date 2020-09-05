import {HTTP} from './http'
class HttpModel extends HTTP{
  login(userInfo, callBack){
    userInfo.avatar_url = userInfo.avatarUrl;
    userInfo.nick_name = userInfo.nickName;
    this.request({
      url:"/yapi/min/proxy/login",
      data:userInfo,
      method:"POST",
      success:(res)=>{
        if(res.code === "200"){
          callBack(res.data);
        }
      }
    });
  }
  wxlogin(userInfo, callBack){
    let that = this;
    return wx.login({
          success: (res) => {
            userInfo.code = res.code
            that.login(userInfo, (res)=>{
              wx.setStorage({
                key:'loginUser',
                data:res
              })
            });
          }
        });
  }
  wxUploadImg(imgpath, ok, fail){
    let url = this.getApiurl('/store/upload/img');
    wx.uploadFile({
      url: url,
      filePath: imgpath,
      name: 'img',
      header: {
        'content-type': 'multipart/form-data',
        'sessionKey':wx.getStorageSync('loginUser').session_key
      },
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