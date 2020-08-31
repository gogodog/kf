package com.yunchu.yapi.vo;

import java.util.List;
import javax.validation.constraints.NotEmpty;
import com.yunchu.yapi.entity.YcCookbookStyle;

import lombok.Data;

@Data
public class CookBookPublishRequestVo {
	
	@NotEmpty(message="刷新重试")
	private Integer id;
	@NotEmpty(message="描述不能为空")
	private String miaoshu;
	@NotEmpty(message="标签不能为空")
	private List<YcCookbookStyle> cookbookStyle;

}
