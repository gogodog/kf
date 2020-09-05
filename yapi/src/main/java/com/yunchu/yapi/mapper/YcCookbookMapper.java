package com.yunchu.yapi.mapper;

import com.yunchu.yapi.entity.YcCookbook;

import java.util.List;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-23
 */
public interface YcCookbookMapper extends BaseMapper<YcCookbook> {
	
	List<YcCookbook> streetList();
	
	List<YcCookbook> streetListStep(Page<YcCookbook> ycCookbook);

}
