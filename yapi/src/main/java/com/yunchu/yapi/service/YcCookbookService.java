package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;

import java.util.List;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-22
 */
public interface YcCookbookService extends IService<YcCookbook> {

	boolean newCookBook(CookBookInsertRequestVo vo);

	List<YcCookbook> listByStatus(Page<YcCookbook> page, int status);

	int deleteById(int id);

}
