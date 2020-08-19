package com.yunchu.yapi.vo;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class WxUserLoginResponseVo {
	
	/**
	 * 是否新用户
	 */
	private boolean isNewUser;
	/**
	 * 用户openID
	 */
	private String openId;
	/**
	 * 用户临时请求code-wx
	 */
	private String code;
	/**
	 * 当前登录时间
	 */
	private Date loginTime = new Date();
	
	private String uucode;
	
	public WxUserLoginResponseVo(boolean newUser, String openId, String code, String uucode) {
		this.isNewUser = newUser;
		this.openId = openId;
		this.code = code;
		this.uucode = uucode;
	}

}
