package com.yunchu.yapi.vo;

import lombok.Data;

@Data
public class MessageResponseVo {
	private String code = "200";
	private String msg = "ok";
	private MessageRequestVo data;
}
