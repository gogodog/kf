package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;
import com.yunchu.yapi.vo.CookBookModifyRequestVo;
import com.yunchu.yapi.vo.CookBookPublishRequestVo;

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

	boolean newCookBook(CookBookInsertRequestVo vo, YcAppUser user);

	List<YcCookbook> listByStatus(Page<YcCookbook> page, int status, YcAppUser user);

	int deleteById(int id);

	int publiishCookBook(CookBookPublishRequestVo vo, YcAppUser user);

	int modifyCookBook(CookBookModifyRequestVo vo);

}
