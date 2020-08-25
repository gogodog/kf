import { config } from "./config";
class Chat {
  startConnect(userId,openCk,errCk,mesCk,closeCk) {
    //本地测试使用 ws协议 ,正式上线使用 wss 协议
    var url = config.socket+userId;
    var wxst = wx.connectSocket({
      url: url,
      method: "GET"
    });
    wxst.onOpen(res => {
      console.info('连接打开成功');
      openCk(res);
    });
    wxst.onError(res => {
      console.info('连接Error');
      errCk(res)
    });
    wxst.onMessage(res => {
      let server = JSON.parse(res.data)
      if(server.code == '200'){
        mesCk(server.data);
      }
    });
    wxst.onClose(() => {
      console.info('连接关闭');
      closeCk();
    });
    return wxst;
  }


  //发送内容
  sendOne(wxst, msgJson, ok, err) {
    if (wxst.readyState == wxst.OPEN) {
      wxst.send({
        data: JSON.stringify(msgJson),
        success: (res) => {
          console.info('客户端发送成功:', res);
          ok(msgJson);
        }
      });
    } else {
      console.error('连接已经关闭');
      err()
    }
  }
  //关闭连接
  closeOne(wxst) {
    wxst.close();
  }
}
export {
  Chat
}