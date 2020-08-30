package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcAssistFood;
import com.yunchu.yapi.mapper.YcAssistFoodMapper;
import com.yunchu.yapi.service.YcAssistFoodService;
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
 * @since 2020-08-31
 */
@Service
public class YcAssistFoodServiceImpl extends ServiceImpl<YcAssistFoodMapper, YcAssistFood> implements YcAssistFoodService {

	@Override
	public List<YcAssistFood> getListByCnName(String cnname, Integer page, Integer size) {
		if(page == null || size == null){
			page = 1;
			size = 5;
		}
		if(StringUtils.isNotBlank(cnname)){
			IPage<YcAssistFood> food = new Page<>(page, size);
			super.baseMapper.selectPage(food, new QueryWrapper<YcAssistFood>().like("cnname", cnname));
			return food.getRecords();
		}
		return new ArrayList<>();
	}

}
