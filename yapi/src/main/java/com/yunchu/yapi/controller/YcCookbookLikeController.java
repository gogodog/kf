package com.yunchu.yapi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.service.YcCookbookLikeService;
import com.yunchu.yapi.system.handler.result.Result;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-05
 */
@RestController
@RequestMapping("/yc-cookbook-like")
public class YcCookbookLikeController {
	
	@Autowired
	YcCookbookLikeService ycCookbookLikeService;
	
	@GetMapping("/like")
	public Result like(Long cookbookId, @RequestAttribute YcAppUser user){
		return Result.ok(this.ycCookbookLikeService.like(cookbookId, user));
	}

}
