package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcSeasoning;
import com.yunchu.yapi.mapper.YcSeasoningMapper;
import com.yunchu.yapi.service.YcSeasoningService;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
@Service
public class YcSeasoningServiceImpl extends ServiceImpl<YcSeasoningMapper, YcSeasoning> implements YcSeasoningService {

	@Override
	public List<YcSeasoning> getListByCnName(String cnname, Integer page, Integer size) {
		if(page == null || size == null){
			page = 1;
			size = 50;
		}
		if(StringUtils.isNotBlank(cnname)){
			IPage<YcSeasoning> food = new Page<>(page, size);
			super.baseMapper.selectPage(food, new QueryWrapper<YcSeasoning>().like("cnname", cnname));
			return food.getRecords();
		}
		return new ArrayList<>();
	}

}
