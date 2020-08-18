package com.yunchu.api.system.handler.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum WxResultEnum {
	
	OK(0,"成功"),
	SYS_BUSY(-1,"系统繁忙，此时请开发者稍候再试"), 
	SYS_INVALID(40029,"code 无效"),
	LIMIT_100(45011,"频率限制，每个用户每分钟100次")
	;
	
	private int errcode;
	private String errmsg;

}
