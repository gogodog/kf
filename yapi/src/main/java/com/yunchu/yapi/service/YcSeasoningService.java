package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcSeasoning;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
public interface YcSeasoningService extends IService<YcSeasoning> {

	List<YcSeasoning> getListByCnName(String cnname, Integer page, Integer size);

}
