package com.yunchu.yapi.handler;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookAttion;

public class YcCookbookAttionHandler {
	
	public static YcCookbookAttion attion(Long cookbookId, YcAppUser user) {
		YcCookbookAttion entity = new YcCookbookAttion();
		entity.setCookbookId(cookbookId);
		entity.setUHead(user.getWxHead());
		entity.setUName(user.getWxName());
		entity.setUOpenid(user.getWxOpenid());
		entity.setUUucode(user.getUucode());
		return entity;
	}

}
