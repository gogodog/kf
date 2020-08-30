package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcAssistFood;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-31
 */
public interface YcAssistFoodService extends IService<YcAssistFood> {

	List<YcAssistFood> getListByCnName(String cnname, Integer page, Integer size);

}
