package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbookAttion;
import com.yunchu.yapi.handler.YcCookbookAttionHandler;
import com.yunchu.yapi.mapper.YcCookbookAttionMapper;
import com.yunchu.yapi.service.YcCookbookAttionService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
		if(this.baseMapper.selectOne(query) == null){
			return this.attion(cookbookId, user);
		}
		return this.baseMapper.delete(query) == 1;
	}

	@Override
	public boolean attion(Long cookbookId, YcAppUser user) {
		return this.baseMapper.insert(YcCookbookAttionHandler.attion(cookbookId, user)) == 1;
	}

}
