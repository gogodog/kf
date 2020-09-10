package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookAttion;
import com.yunchu.yapi.entity.YcCookbookLike;
import com.yunchu.yapi.handler.YcCookbookAttionHandler;
import com.yunchu.yapi.mapper.YcCookbookAttionMapper;
import com.yunchu.yapi.service.YcCookbookAttionService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.Collections;
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
public class YcCookbookAttionServiceImpl extends ServiceImpl<YcCookbookAttionMapper, YcCookbookAttion> implements YcCookbookAttionService {

	@Override
	public boolean uattion(Long cookbookId, YcAppUser user) {
		QueryWrapper<YcCookbookAttion> query = new QueryWrapper<YcCookbookAttion>().eq("cookbook_id", cookbookId).eq("u_uucode", user.getUucode());
		List<YcCookbookAttion> attions = super.baseMapper.selectList(query);
		if(CollectionUtils.isEmpty(attions)){//和关注同样的处理方式
			return this.attion(cookbookId, user);
		}
		return this.baseMapper.delete(query) == 1;
	}

	@Override
	public boolean attion(Long cookbookId, YcAppUser user) {
		return this.baseMapper.insert(YcCookbookAttionHandler.attion(cookbookId, user)) == 1;
	}

}
