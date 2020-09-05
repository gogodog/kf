package com.yunchu.yapi.mapper;

import com.yunchu.yapi.entity.YcCookbookAttion;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-05
 */
public interface YcCookbookAttionMapper extends BaseMapper<YcCookbookAttion> {
	
	Long getAttionCountByCookBookId(@Param("cookbookId") Long cookbookId);

}
