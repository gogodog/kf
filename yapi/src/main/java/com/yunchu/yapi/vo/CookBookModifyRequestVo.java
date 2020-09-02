package com.yunchu.yapi.vo;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class CookBookModifyRequestVo extends CookBookInsertRequestVo{
	
	@NotNull(message="刷新重试")
	private Long id;

}
