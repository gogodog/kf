package com.yunchu.yapi.entity.dbenum;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FoodStatusEnum {
	
	OVER(0, "过量"), ENOUGH(1, "充足"), LESS(2, "少量"), NIL(3, "无");
	
	private int type;
	private String desc;
	
}
