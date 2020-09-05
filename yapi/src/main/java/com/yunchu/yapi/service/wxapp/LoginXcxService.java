package com.yunchu.yapi.service.wxapp;

import org.springframework.stereotype.Service;

import com.yunchu.yapi.vo.WxUserLoginRequestVo;
import com.yunchu.yapi.vo.WxUserLoginResponseVo;

@Service
public interface LoginXcxService {

	/**
	 * 通过微信code获取用户的openid
	 * @param vo
	 * @return
	 */
	WxUserLoginResponseVo loginByCode(WxUserLoginRequestVo vo);

}
