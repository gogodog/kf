package com.yunchu.yapi.mapper;

import com.yunchu.yapi.entity.YcDishStyle;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-26
 */
public interface YcDishStyleMapper extends BaseMapper<YcDishStyle> {

	@Select("#{sql}")
	int sql(@Param("sql") String sql);

}
