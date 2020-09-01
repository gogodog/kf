package com.yunchu.yapi.vo;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.yunchu.yapi.entity.YcDishStyle;

import lombok.Data;

@Data
public class CookBookPublishRequestVo {
	
	@NotNull(message="刷新重试")
	private Long cid;
	@NotBlank(message="封面不能为空")
	private String img;
	@NotBlank(message="描述不能为空")
	private String miaoshu;
	@NotEmpty(message="标签不能为空")
	private List<YcDishStyle> tags;

}
