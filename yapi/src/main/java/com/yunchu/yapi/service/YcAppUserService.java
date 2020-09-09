package com.yunchu.yapi.service;

import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.vo.WxUserRequestVo;

import javax.servlet.http.HttpServletRequest;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-18
 */
public interface YcAppUserService extends IService<YcAppUser> {

	YcAppUser saveWxInfo(WxUserRequestVo vo, YcAppUser user, HttpServletRequest request);

}
