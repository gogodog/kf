package com.yunchu.yapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.service.YcFoodService;
import com.yunchu.yapi.system.handler.result.Result;

@RestController
@RequestMapping("/yc-food")
public class YcFoodController {
	
	@Autowired
	YcFoodService ycFoodSevice;
	
	@GetMapping("/list/bytype")
	public Result foodListByType(Integer type, Integer page, Integer size){
		return Result.ok(ycFoodSevice.getFoodListByType(type, page, size));
	}
	
	@GetMapping("/list/bycnname")
	public Result foodListByName(String cnname, Integer page, Integer size){
		return Result.ok(ycFoodSevice.getFoodListByCnName(cnname, page, size));
	}

}
