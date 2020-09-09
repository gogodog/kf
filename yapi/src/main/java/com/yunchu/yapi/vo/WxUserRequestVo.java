package com.yunchu.yapi.vo;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class WxUserRequestVo {

	@NotEmpty(message="头像不能为空")
	private String avatarUrl;
	private String city;
	private String country;
	private Integer gender;
	private String language;
	@NotEmpty(message="昵称不能为空")
	private String nickName;
	private String province;

}
