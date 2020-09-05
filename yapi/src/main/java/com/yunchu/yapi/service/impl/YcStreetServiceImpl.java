package com.yunchu.yapi.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.mapper.YcCookbookMapper;
import com.yunchu.yapi.mapper.YcCookbookStyleMapper;
import com.yunchu.yapi.service.YcStreetService;

@Service
public class YcStreetServiceImpl implements YcStreetService {
	
	@Autowired
	YcCookbookStyleMapper ycCookbookStyleMapper;
	
	@Autowired
	YcCookbookMapper ycCookbookMapper;

	@Override
	public List<YcCookbook> streetRecommendList(Page<YcCookbook> page, YcAppUser user) {
		return ycCookbookMapper.streetListStep(page);
	}

	@Override
	public List<YcCookbook> streetAttionList(Page<YcCookbook> page, YcAppUser user) {
		return ycCookbookMapper.streetListStep(page);
	}

}
