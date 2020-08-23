package com.yunchu.yapi.entity.dbenum;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum CookBookStatusEnum {
	
	NO_PUBLISH(0, "未发布"), PUBLISHED(1, "已发布"), DELETETED(2, "已删除");
	
	private int status;
	private String desc;
	
	public static CookBookStatusEnum getEnum(int status){
		for (CookBookStatusEnum e : CookBookStatusEnum.values()) {
			if(e.getStatus() == status)
				return e;
		}
		return null;
	}
	
}
