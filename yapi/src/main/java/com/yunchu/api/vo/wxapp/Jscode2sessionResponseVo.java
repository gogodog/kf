package com.yunchu.api.vo.wxapp;

import com.yunchu.api.system.handler.result.WxResult;

import lombok.Data;

@Data
public class Jscode2sessionResponseVo extends WxResult{

	private String openid;
	private String session_key;
	private String unionid;
	
}
