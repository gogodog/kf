package com.yunchu.yapi.mapper;

import com.yunchu.yapi.entity.YcCookbookLike;

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
public interface YcCookbookLikeMapper extends BaseMapper<YcCookbookLike> {
	
	Long getLikeCountByCookBookId(@Param("cookbookId") Long cookbookId);

}
