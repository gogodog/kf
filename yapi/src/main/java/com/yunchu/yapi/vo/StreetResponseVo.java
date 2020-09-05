package com.yunchu.yapi.vo;

import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.entity.YcCookbookStyle;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StreetResponseVo {

	private YcCookbook cookbook;
	
	private YcCookbookStyle tags;
	
}
