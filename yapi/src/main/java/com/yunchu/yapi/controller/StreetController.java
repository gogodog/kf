package com.yunchu.yapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.service.YcStreetService;
import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.system.handler.result.Result;
import com.yunchu.yapi.system.handler.result.ResultEnum;

/**
 * <p>
 *  食街
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
@RestController
@RequestMapping("/yc-street")
public class StreetController {
	
	@Autowired
	YcStreetService ycStreetService;
	
	@GetMapping("/street/list")
	public Result streetList(Integer type, Page<YcCookbook> page, @RequestAttribute YcAppUser user){
		if(type == 0)
			return this.streetAttionList(page, user);
		else if(type == 1)
			return this.streetRecommendList(page, user);
		else
			throw new AppException(ResultEnum.INVALID_PARAMETER);
	}
	
	@GetMapping("/street/recommend")
	public Result streetRecommendList(Page<YcCookbook> page, @RequestAttribute YcAppUser user){
		return Result.ok(ycStreetService.streetRecommendList(page, user));
	}
	
	@GetMapping("/street/attion")
	public Result streetAttionList(Page<YcCookbook> page, @RequestAttribute YcAppUser user){
		return Result.ok(ycStreetService.streetAttionList(page, user));
	}
	
}
