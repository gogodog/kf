import { config } from "./config";
class Login{
    static login() {  
        return new Promise((resolve, reject) => wx.login({ success: resolve, fail: reject }));  
    };
    static getUserInfo(ck) {  
        return new Promise((resolve, reject) => wx.getUserInfo({ success:res=>{
            ck && ck(res);
        }, fail: res=>{
            return res;
        } }));  
    };
    static getSetting() {
        return new Promise((resolve, reject) => wx.getSetting({ success: resolve, fail: reject })); 
    };
    static loginServer() {
        let code = wx.getStorageSync('wxcode');
        return new Promise(() => wx.request({
            url: config.api_url + "/yapi/min/proxy/login",
            method: "POST",
            data:{code: code},
            header:{
              'content-type':'application/json'
            },
            success: Login.loginServerResolve,
            fail: Login.loginServerReject,
        }));
    }
    static loginServerResolve (res) {
        let statusCode = res.statusCode;
        if(res.statusCode === 200 && res.data.code === "200"){
            wx.setStorage({key:'loginUser',data:res.data.data})
        }else{
            wx.showToast({
                icon: 'loading',
                title: res.data.msg | res.errMsg
            })
        }
    }
    static loginServerReject (res) {
        console.log("errorres", res)
    }
    LoginUserInfoProcess(ck){
        Login.getSetting().then(d => {
            return d.authSetting['scope.userInfo'] ? true : false;
        }).then(d => {
            return d? Login.login(): null;
        }).then(d => {
            wx.setStorageSync("wxcode", d ? d.code : d);
            return Login.getUserInfo();
        }).then(d => {
            Login.loginServer(d);
            return d
        }).then(d => {
            ck && ck(d);
        }).catch(e => {
            console.log(e);
        })
    }
    LoginProcess(ck){
        Login.login().then(d => {
            wx.setStorageSync("wxcode", d ? d.code : d);
            return d.code;
        }).then(d => {
            Login.loginServer(d);
        }).then(d => {
            ck && ck(d);
        }).catch(e => {
            console.log(e);
        })
    }
}

export {Login}