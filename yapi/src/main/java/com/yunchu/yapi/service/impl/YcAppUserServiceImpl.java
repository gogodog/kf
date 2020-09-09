package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.comment.localcatch.WxLoginSession;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.handler.YcAppUserHandler;
import com.yunchu.yapi.mapper.YcAppUserMapper;
import com.yunchu.yapi.service.YcAppUserService;
import com.yunchu.yapi.vo.WxUserRequestVo;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-18
 */
@Service
public class YcAppUserServiceImpl extends ServiceImpl<YcAppUserMapper, YcAppUser> implements YcAppUserService {

	@Override
	public YcAppUser saveWxInfo(WxUserRequestVo vo, YcAppUser user, HttpServletRequest request) {
		YcAppUser entity = YcAppUserHandler.getSaveInfoUser(vo, user);
		super.baseMapper.updateById(entity);
		YcAppUser newUser = super.baseMapper.selectById(user.getId());
		WxLoginSession.put(request.getHeader("sessionKey"), newUser);
		return newUser;
	}

}
