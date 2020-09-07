package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcFood;
import com.yunchu.yapi.mapper.YcFoodMapper;
import com.yunchu.yapi.service.YcFoodService;
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
 * @since 2020-08-19
 */
@Service
public class YcFoodServiceImpl extends ServiceImpl<YcFoodMapper, YcFood> implements YcFoodService {

	@Override
	public List<YcFood> getFoodListByType(int type, int page, int size) {
		IPage<YcFood> food = new Page<>(page, size);
		super.baseMapper.selectPage(food, new QueryWrapper<YcFood>().eq("type", type));
		return food.getRecords();
	}

	@Override
	public List<YcFood> getFoodListByCnName(String cnname, Integer page, Integer size) {
		if(page == null || size == null){
			page = 1;
			size = 50;
		}
		if(StringUtils.isNotBlank(cnname)){
			IPage<YcFood> food = new Page<>(page, size);
			super.baseMapper.selectPage(food, new QueryWrapper<YcFood>().like("cnname", cnname.trim()));
			return food.getRecords();
		}
		return new ArrayList<>();
	}

}
