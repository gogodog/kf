package com.yunchu.yapi.handler;

import java.util.Date;

import com.yunchu.yapi.entity.YcCookbookStyle;
import com.yunchu.yapi.entity.YcDishStyle;

public class YcDishStyleHandler {

	public static YcCookbookStyle transferToYcCookbookStyle(YcDishStyle tag, Long cid) {
		YcCookbookStyle entity = new YcCookbookStyle();
		Date time = new Date();
		entity.setCookbookId(cid);
		entity.setCreateTime(time);
		entity.setStyleCnname(tag.getCnname());
		entity.setStyleEnname(tag.getEnname());
		entity.setStyleId(tag.getId());
		entity.setStyleMiaoshu(tag.getMiaoshu());
		entity.setStylePId(tag.getPId());
		entity.setUpdateTime(time);
		return entity;
	}

	
	
}
