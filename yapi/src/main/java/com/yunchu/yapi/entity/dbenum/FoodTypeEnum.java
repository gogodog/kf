package com.yunchu.yapi.entity.dbenum;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum FoodTypeEnum {
	
	OTHER(0, "其它"), VEGETABLES(1, "蔬菜"), FRUITS(2, "水果"), SEAFOOD(3, "海鲜"), SEASONING(4, "调料");
	
	private int type;
	private String cnName;
	
}
