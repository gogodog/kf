package com.yunchu.yapi.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.service.YcSeasoningService;
import com.yunchu.yapi.system.handler.result.Result;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
@RestController
@RequestMapping("/yc-seasoning")
public class YcSeasoningController {
	
	@Autowired
	YcSeasoningService ycSeasoningService;

	@GetMapping("/list/bycnname")
	public Result listByName(String cnname, Integer page, Integer size){
		return Result.ok(ycSeasoningService.getListByCnName(cnname, page, size));
	}
	
}
