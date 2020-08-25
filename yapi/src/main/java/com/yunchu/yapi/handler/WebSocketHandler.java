package com.yunchu.yapi.handler;

import com.yunchu.yapi.vo.MessageRequestVo;
import com.yunchu.yapi.vo.MessageResponseVo;

public class WebSocketHandler {

	public static MessageResponseVo getServerErrorVo() {
		MessageResponseVo err = new MessageResponseVo();
		err.setCode("201");
		err.setMsg("服务器解析异常");
		return err;
	}

	public static MessageResponseVo getSendMessage(MessageRequestVo vo) {
		MessageResponseVo ok = new MessageResponseVo();
		ok.setData(vo);
		return ok;
	}

	public static MessageResponseVo getServerOpenOkVo() {
		return new MessageResponseVo();
	}

}
