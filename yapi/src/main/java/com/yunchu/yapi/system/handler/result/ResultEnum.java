package com.yunchu.yapi.system.handler.result;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ResultEnum {
	
	SUCCESS("200","成功"),//1千段 通信过程
	ERROR("10001","错误"), //1万段 服务端服务底层错误异常（JVM等，服务器，第三方服务器，依赖硬件）
	FAIL("20001","失败"),//2万段 服务等服务底层失败异常（非编码逻辑错误，依赖服务）
	EXCEPTION("30001","异常"),//3万段
	ARGUMENTVALID("40001","参数校验失败"),//4万段
	MIM_LOGIN_NOOPENID_ERROR("WX0001", "没有获取到openid")
	;
	
	private String code;
	private String msg;

}
