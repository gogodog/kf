package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookLike;
import com.yunchu.yapi.handler.YcCookbookLikeHandler;
import com.yunchu.yapi.mapper.YcCookbookLikeMapper;
import com.yunchu.yapi.service.YcCookbookLikeService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-05
 */
@Service
public class YcCookbookLikeServiceImpl extends ServiceImpl<YcCookbookLikeMapper, YcCookbookLike> implements YcCookbookLikeService {

	@Override
	public boolean unLike(Long cookbookId, YcAppUser user) {
		return this.baseMapper.delete(new QueryWrapper<YcCookbookLike>().eq("cookbook_id", cookbookId).eq("u_uucode", user.getUucode())) == 1;
	}

	@Override
	public boolean like(Long cookbookId, YcAppUser user) {
		QueryWrapper<YcCookbookLike> query = new QueryWrapper<YcCookbookLike>().eq("cookbook_id", cookbookId).eq("u_uucode", user.getUucode());
		List<YcCookbookLike> likes = super.baseMapper.selectList(query);
		if(CollectionUtils.isNotEmpty(likes)){//业务逻辑为每人只允许喜欢一次，但是若出现单点高并发不做事务处理，允许部分数据出现多次点击
			return this.unLike(cookbookId, user);
		}
		return this.baseMapper.insert(YcCookbookLikeHandler.like(cookbookId, user)) == 1;
	}

}
