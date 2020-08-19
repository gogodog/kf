package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcFood;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-19
 */
public interface YcFoodService extends IService<YcFood> {

	List<YcFood> getFoodListByType(int type, int page, int size);

}
