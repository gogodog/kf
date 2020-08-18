package com.yunchu.yapi.mapper;

import com.yunchu.yapi.entity.User;

import java.util.List;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-17
 */
public interface UserMapper extends BaseMapper<User> {

	public List<User>findAllUser();
	
}
