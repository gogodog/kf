package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcCookbook;
import com.yunchu.yapi.vo.CookBookInsertRequestVo;
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

}
