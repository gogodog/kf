package com.yunchu.yapi.service.wxapp;

import org.springframework.stereotype.Service;

import com.yunchu.api.vo.WxUserLoginResponseVo;

@Service
public interface LoginXcxService {

	/**
	 * 通过微信code获取用户的openid
	 * @param code
	 * @return
	 */
	WxUserLoginResponseVo loginByCode(String code);

}
