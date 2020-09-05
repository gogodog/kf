package com.yunchu.yapi.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.service.YcCookbookAttionService;
import com.yunchu.yapi.system.handler.result.Result;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-05
 */
@RestController
@RequestMapping("/yc-cookbook-attion")
public class YcCookbookAttionController {
	
	@Autowired
	YcCookbookAttionService ycCookbookAttionService;
	
	@GetMapping("/attion")
	public Result attion(Long cookbookId, @RequestAttribute YcAppUser user){
		return Result.ok(this.ycCookbookAttionService.uattion(cookbookId, user));
	}

}
