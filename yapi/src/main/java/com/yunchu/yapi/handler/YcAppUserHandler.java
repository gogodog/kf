package com.yunchu.yapi.handler;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.tools.GsonUtil;
import com.yunchu.yapi.vo.WxUserRequestVo;

public class YcAppUserHandler {

	public static YcAppUser getSaveInfoUser(WxUserRequestVo vo, YcAppUser user) {
		YcAppUser entity = new YcAppUser();
		entity.setId(user.getId());
		entity.setWxHead(vo.getAvatarUrl());
		entity.setWxName(vo.getNickName());
		entity.setWxInfo(GsonUtil.GsonString(vo));
		return entity;
	}
	
	

}
