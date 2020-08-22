package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.handler.YcCookbookHandler;
import com.yunchu.yapi.mapper.YcCookbookMapper;
import com.yunchu.yapi.service.YcCookbookService;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
public class YcCookbookServiceImpl extends ServiceImpl<YcCookbookMapper, YcCookbook> implements YcCookbookService {

	@Override
	public boolean newCookBook(CookBookInsertRequestVo vo) {
		YcCookbook entity = YcCookbookHandler.fgetBookEntity(vo);
		return super.baseMapper.insert(entity) == 1;
	}

}
