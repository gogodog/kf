package com.yunchu.yapi.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.service.YcDishStyleService;
import com.yunchu.yapi.system.handler.result.Result;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-26
 */
@RestController
@RequestMapping("/yc-dish-style")
public class YcDishStyleController {
	
	@Autowired
	YcDishStyleService ycDishStyleService;

	@GetMapping("/tree")
	public Result foodListByType(Integer type, Integer page, Integer size){
		return Result.ok(ycDishStyleService.getTree());
	}
	
}
