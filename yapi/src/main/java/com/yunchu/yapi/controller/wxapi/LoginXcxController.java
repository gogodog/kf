package com.yunchu.yapi.controller.wxapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yunchu.yapi.service.wxapp.LoginXcxService;
import com.yunchu.yapi.system.handler.result.Result;
import com.yunchu.yapi.vo.WxUserLoginRequestVo;

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
    @PostMapping(value="/login")
    public Result login(@Validated @RequestBody WxUserLoginRequestVo vo) {
    	log.info("WxUserLoginRequestVo:", vo);
    	return Result.ok(this.loginXcxService.loginByCode(vo));
    }

}
