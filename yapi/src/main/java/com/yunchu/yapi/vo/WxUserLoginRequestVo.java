package com.yunchu.yapi.vo;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class WxUserLoginRequestVo {

	private String avatarUrl;
	private String city;
	private String country;
	private Integer gender;
	private String language;
	private String nickName;
	private String province;
	@NotEmpty(message="微信校验不能为空")
	private String code;

}
