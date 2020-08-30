package com.yunchu.yapi.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.service.YcAssistFoodService;
import com.yunchu.yapi.system.handler.result.Result;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-31
 */
@RestController
@RequestMapping("/yc-assist-food")
public class YcAssistFoodController {

	@Autowired
	YcAssistFoodService ycAssistFoodService;

	@GetMapping("/list/bycnname")
	public Result listByName(String cnname, Integer page, Integer size){
		return Result.ok(ycAssistFoodService.getListByCnName(cnname, page, size));
	}
	
}
