package com.yunchu.yapi.handler;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookLike;

public class YcCookbookLikeHandler {
	
	public static YcCookbookLike like(Long cookbookId, YcAppUser user) {
		YcCookbookLike entity = new YcCookbookLike();
		entity.setCookbookId(cookbookId);
		entity.setUHead(user.getWxHead());
		entity.setUName(user.getWxName());
		entity.setUOpenid(user.getWxOpenid());
		entity.setUUucode(user.getUucode());
		return entity;
	}

}
