package com.yunchu.yapi.entity.dbenum;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
/**
 * 秦始皇统一度量衡，还是很有用的
 * @author cott.wen
 *
 */
public enum FoodCtypEnum {
	
	MG("毫克", "mg", "mg"), G("克", "g", "g"), KG("公斤", "kg", "kg"), C_LIANG("两", "两", "cliang"), C_SHIJIN("市斤", "市斤",
			"cshijin"), D_GE("个", "个", "dge"), D_KE("颗", "颗",
					"dke"), D_KE1("棵", "棵", "dke1"), D_LI("粒", "粒", "dli"), D_KUAI("块", "块", "dkuai");
	
	private String cnTag;
	private String enTag;
	private String dbType;
	
}
