package com.yunchu.yapi.vo;

import java.util.List;
import javax.validation.constraints.NotEmpty;
import com.yunchu.yapi.entity.YcDishStyle;

import lombok.Data;

@Data
public class CookBookPublishRequestVo {
	
	@NotEmpty(message="刷新重试")
	private Long cid;
	@NotEmpty(message="封面不能为空")
	private String img;
	@NotEmpty(message="描述不能为空")
	private String miaoshu;
	@NotEmpty(message="标签不能为空")
	private List<YcDishStyle> tags;

}
