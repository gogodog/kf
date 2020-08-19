package com.yunchu.yapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.service.YcFoodService;
import com.yunchu.yapi.system.handler.result.Result;

@RestController
@RequestMapping("/new/cbook")
public class NewCookBookPage {
	
	@Autowired
	YcFoodService ycFoodSevice;
	
	@GetMapping("/foodlist")
	public Result foodList(Integer type, Integer page, Integer size){
		return Result.ok(ycFoodSevice.getFoodListByType(type, page, size));
	}

}
