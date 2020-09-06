package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.entity.YcCookbookStyle;
import com.yunchu.yapi.entity.YcDishStyle;
import com.yunchu.yapi.handler.YcCookbookHandler;
import com.yunchu.yapi.handler.YcDishStyleHandler;
import com.yunchu.yapi.mapper.YcCookbookMapper;
import com.yunchu.yapi.mapper.YcCookbookStyleMapper;
import com.yunchu.yapi.service.YcCookbookService;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;
import com.yunchu.yapi.vo.CookBookModifyRequestVo;
import com.yunchu.yapi.vo.CookBookPublishRequestVo;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
@Service
public class YcCookbookServiceImpl extends ServiceImpl<YcCookbookMapper, YcCookbook> implements YcCookbookService {
	
	@Autowired
	YcCookbookStyleMapper ycCookbookStyleMapper;
	
	@Override
	public boolean newCookBook(CookBookInsertRequestVo vo, YcAppUser user) {
		YcCookbook entity = YcCookbookHandler.fgetBookEntity(vo, user);
		return super.baseMapper.insert(entity) == 1;
	}

	@Override
	public List<YcCookbook> listByStatus(Page<YcCookbook> page, int status, YcAppUser user) {
		super.baseMapper.selectPage(page, new QueryWrapper<YcCookbook>().eq("status", status).eq("user_code", user.getUucode()));
		return page.getRecords();
	}

	@Override
	public int deleteById(int id) {
		return super.baseMapper.deleteById(id);
	}

	@Override
	@Transactional
	public int publiishCookBook(CookBookPublishRequestVo vo, YcAppUser user) {
		super.baseMapper.updateById(YcCookbookHandler.publishCookBookEntity(vo, user));
		this.ycCookbookStyleMapper.delete(new QueryWrapper<YcCookbookStyle>().eq("cookbook_id", vo.getCid()));
		for (YcDishStyle tag : vo.getTags()) {
			YcCookbookStyle entity = YcDishStyleHandler.transferToYcCookbookStyle(tag, vo.getCid());
			this.ycCookbookStyleMapper.insert(entity);
		}
		return 0;
	}

	@Override
	public int modifyCookBook(CookBookModifyRequestVo vo) {
		return super.baseMapper.updateById(YcCookbookHandler.transferToYcCookbookToModify(vo));
	}

}
