package com.yunchu.yapi.controller.wxapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.api.system.handler.result.Result;
import com.yunchu.yapi.service.wxapp.LoginXcxService;

import lombok.extern.log4j.Log4j2;

@RestController
@Log4j2(topic="微信小程序登录相关")
@RequestMapping("/min/proxy")
public class LoginXcxController {
	
	
	@Autowired
	LoginXcxService loginXcxService;
	
	/**
     * 静默登录
     * @param
     */
    @ResponseBody
    @GetMapping(value="/login")
    public Result login(String code) {
    	log.info("code:", code);
    	return Result.ok(this.loginXcxService.loginByCode(code));
    }

}
