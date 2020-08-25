package com.yunchu.yapi.vo;

import java.util.Date;

import com.yunchu.yapi.tools.DateUtil;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MessageRequestVo {

	private String msg;
	private String time = DateUtil.simpleDate(new Date(), DateUtil.CN_FORMAT_1);
	private int status = 0; //0:发送成功 1:发送失败 2:对方撤销 3:自己撤销 4:拒收 5:不是好友关系 6:接收成功
	private int type = 0; //0:文字 1:图片 2:语音 3:定位
	private String from;//sc09hat001:语音服务器
	private String to;
	
	public MessageRequestVo(String msg, String from){
		this.msg = msg;
	}
	
}
