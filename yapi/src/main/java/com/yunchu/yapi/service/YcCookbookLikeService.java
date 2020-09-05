package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookLike;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-05
 */
public interface YcCookbookLikeService extends IService<YcCookbookLike> {

	boolean unLike(Long cookbookId, YcAppUser user);
	
	boolean like(Long cookbookId, YcAppUser user);

}
