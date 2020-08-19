package com.yunchu.yapi.vo.wxapp;

import com.yunchu.yapi.system.handler.result.WxResult;

import lombok.Data;

@Data
public class Jscode2sessionResponseVo extends WxResult{

	private String openid;
	private String session_key;
	private String unionid;
	
}
