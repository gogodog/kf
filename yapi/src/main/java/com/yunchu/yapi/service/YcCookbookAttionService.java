package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookAttion;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-05
 */
public interface YcCookbookAttionService extends IService<YcCookbookAttion> {

	boolean attion(Long cookbookId, YcAppUser user);

	boolean uattion(Long cookbookId, YcAppUser user);

}
