package com.yunchu.yapi.comment.localcatch;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import com.yunchu.yapi.entity.YcAppUser;

@Component
public class WxLoginSession {
	
	public static final Map<String, YcAppUser> WX_SESSION = new HashMap<>();

	public static String put(YcAppUser user) {
		String sessionKey = UUID.randomUUID().toString();
		WxLoginSession.WX_SESSION.put(sessionKey, user);
		return sessionKey;
	}
	
	public static void put(String sessionKey, YcAppUser user){
		WxLoginSession.WX_SESSION.put(sessionKey, user);
	}

	public static boolean isExist(String sessionKey) {
		if(StringUtils.isNotBlank(sessionKey))
			return WxLoginSession.WX_SESSION.containsKey(sessionKey);
		return false;
	}

	public static YcAppUser getUserInfo(String sessionKey) {
		return WxLoginSession.WX_SESSION.get(sessionKey);
	}

}
