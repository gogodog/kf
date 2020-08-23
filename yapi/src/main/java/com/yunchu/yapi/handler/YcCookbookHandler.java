package com.yunchu.yapi.handler;

import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.entity.dbenum.CookBookStatusEnum;
import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.tools.GsonUtil;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;

public class YcCookbookHandler {

	public static boolean checkNewCookbook(CookBookInsertRequestVo vo){
		if(CollectionUtils.isEmpty(vo.getContentFood())){
			throw new AppException("食材不能为空");
		}
		if(CollectionUtils.isEmpty(vo.getContentSeasoning())){
			throw new AppException("调料不能为空");
		}
		return true;
	}
	
	public static YcCookbook fgetBookEntity(CookBookInsertRequestVo vo){
		if(vo == null)
			return null;
		YcCookbook ck = new YcCookbook();
		ck.setAttion(vo.getContentAttion());
		ck.setMethod(vo.getContentMethod());
		ck.setFood(GsonUtil.GsonStringReturnEmpty(vo.getContentFood()));
		ck.setSeasoning(GsonUtil.GsonStringReturnEmpty(vo.getContentSeasoning()));
		ck.setName(vo.getName());
		return ck;
	}

	public static boolean checkStatus(int status) {
		if(CookBookStatusEnum.getEnum(status) == null){
			throw new AppException("参数异常");
		}
		return true;
	}
	
}
