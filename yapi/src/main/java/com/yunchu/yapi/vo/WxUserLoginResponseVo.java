package com.yunchu.yapi.vo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class WxUserLoginResponseVo {
	
	/**
	 * 是否新用户
	 */
	private boolean isNewUser;
	
	private String sessionKey;
	
	public WxUserLoginResponseVo(boolean newUser, String sessionKey) {
		this.isNewUser = newUser;
		this.sessionKey = sessionKey;
	}

}
