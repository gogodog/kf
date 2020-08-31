package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcDishStyle;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-26
 */
public interface YcDishStyleService extends IService<YcDishStyle> {

	List<YcDishStyle> getTree();

}
