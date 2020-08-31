package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcDishStyle;
import com.yunchu.yapi.mapper.YcDishStyleMapper;
import com.yunchu.yapi.service.YcDishStyleService;
import com.yunchu.yapi.tools.TreeUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-26
 */
@Service
public class YcDishStyleServiceImpl extends ServiceImpl<YcDishStyleMapper, YcDishStyle> implements YcDishStyleService {

	@Override
	public List<YcDishStyle> getTree() {
		List<YcDishStyle> list = super.baseMapper.selectList(new QueryWrapper<YcDishStyle>().eq("status", 0));
		return TreeUtil.buidTree(list);
	}

}
