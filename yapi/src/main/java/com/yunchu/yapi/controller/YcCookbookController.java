package com.yunchu.yapi.controller;

import javax.validation.constraints.NotEmpty;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.handler.YcCookbookHandler;
import com.yunchu.yapi.service.YcCookbookService;
import com.yunchu.yapi.system.handler.result.Result;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;
import com.yunchu.yapi.vo.CookBookModifyRequestVo;
import com.yunchu.yapi.vo.CookBookPublishRequestVo;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
@RestController
@RequestMapping("/yc-cookbook")
public class YcCookbookController {
	
	@Autowired
	YcCookbookService ycCookbookService;

	@PostMapping("/new/cookbook")
	public Result newCookBook(@Validated @RequestBody CookBookInsertRequestVo vo, @RequestAttribute YcAppUser user){
		return Result.ok(ycCookbookService.newCookBook(vo, user));
	}
	
	@PostMapping("/modify/cookbook")
	public Result modifyCookBook(@Validated @RequestBody CookBookModifyRequestVo vo){
		return Result.ok(ycCookbookService.modifyCookBook(vo));
	}
	
	@PostMapping("/publish/cookbook")
	public Result publiishCookBook(@Validated @RequestBody CookBookPublishRequestVo vo, @RequestAttribute YcAppUser user){
		return Result.ok(ycCookbookService.publiishCookBook(vo, user));
	}
	
	@GetMapping("/list/status")
	public Result listByStatus(int status, Page<YcCookbook> page, @RequestAttribute YcAppUser user){
		YcCookbookHandler.checkStatus(status);
		return Result.ok(ycCookbookService.listByStatus(page, status, user));
	}
	
	@GetMapping("/delete/id")
	public Result deleteById(@NotEmpty Integer id){
		return Result.ok(ycCookbookService.deleteById(id));
	}
	
}
