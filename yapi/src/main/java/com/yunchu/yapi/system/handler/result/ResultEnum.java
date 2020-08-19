package com.yunchu.yapi.system.handler.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResultEnum {
	
	SUCCESS("200","成功"),
	ERROR("10001","错误"), 
	FAIL("20001","成功"),
	EXCEPTION("30001","异常"), 
	
	MIM_LOGIN_NOOPENID_ERROR("WX0001", "没有获取到openid")
	;
	
	private String code;
	private String msg;

}
