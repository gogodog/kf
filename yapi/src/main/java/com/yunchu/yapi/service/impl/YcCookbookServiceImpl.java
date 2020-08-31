package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.handler.YcCookbookHandler;
import com.yunchu.yapi.mapper.YcCookbookMapper;
import com.yunchu.yapi.service.YcCookbookService;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;

import lombok.extern.log4j.Log4j2;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;
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
@Log4j2(topic="YcCookbookServiceImpl::")
public class YcCookbookServiceImpl extends ServiceImpl<YcCookbookMapper, YcCookbook> implements YcCookbookService {

	@Override
	public boolean newCookBook(CookBookInsertRequestVo vo) {
		YcCookbook entity = YcCookbookHandler.fgetBookEntity(vo);
		return super.baseMapper.insert(entity) == 1;
	}

	@Override
	public List<YcCookbook> listByStatus(Page<YcCookbook> page, int status) {
		super.baseMapper.selectPage(page, new QueryWrapper<YcCookbook>().eq("status", status));
		return page.getRecords();
	}

	@Override
	public int deleteById(int id) {
		return super.baseMapper.deleteById(id);
	}

	@Override
	public int publiishCookBook(CookBookInsertRequestVo vo) {
		log.info(vo);
		// TODO Auto-generated method stub
		return 0;
	}

}
