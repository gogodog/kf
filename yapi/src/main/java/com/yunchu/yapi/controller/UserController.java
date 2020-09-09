package com.yunchu.yapi.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.service.YcAppUserService;
import com.yunchu.yapi.system.handler.result.Result;
import com.yunchu.yapi.vo.WxUserRequestVo;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-17
 */
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	YcAppUserService ycAppUserService;
	
	@PostMapping("/save/wxinfo")
	public Result saveWxinfo(@Validated @RequestBody WxUserRequestVo vo, @RequestAttribute YcAppUser user, HttpServletRequest request){
		return Result.ok(ycAppUserService.saveWxInfo(vo, user, request));
	}

	
}
