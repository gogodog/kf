package com.yunchu.yapi.vo;

import java.util.List;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class CookBookInsertRequestVo {
	
	private String contentAttion;
	@NotEmpty(message="制作方法不能为空")
	private String contentMethod;
	@NotEmpty(message="主料不能为空")
	private List<Item> contentFood;
	@NotEmpty(message="调料不能为空")
	private List<Item> contentSeasoning;
	@NotEmpty(message="辅料不能为空")
	private List<Item> contentAssistfood;
	
	@NotEmpty(message="菜谱不能为空")
	@Length(min = 2, max = 10,message="菜谱名称长度必须在2-10个字符")
	private String name;
	
	@Data
	public static class Item{
		
		private int id;
		private String cnname;
		private String ctype;
		private int weightval;
		private String avatar;
		
	}

}
