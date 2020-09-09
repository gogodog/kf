package com.yunchu.yapi.vo;

import com.yunchu.yapi.entity.YcAppUser;

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
	
	private YcAppUser user;
	
	public WxUserLoginResponseVo(boolean newUser, String sessionKey, YcAppUser user) {
		this.isNewUser = newUser;
		this.sessionKey = sessionKey;
		this.user = user;
	}

}
