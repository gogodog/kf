package com.yunchu.yapi.mapper;

import com.yunchu.yapi.entity.YcCookbookStyle;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-01
 */
public interface YcCookbookStyleMapper extends BaseMapper<YcCookbookStyle> {
	
	List<YcCookbookStyle> selectTagByCookbookId(@Param("cookbookId") Long cookbookId);

}
