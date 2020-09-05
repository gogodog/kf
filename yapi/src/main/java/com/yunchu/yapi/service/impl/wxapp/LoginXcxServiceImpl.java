package com.yunchu.yapi.service.impl.wxapp;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.yunchu.yapi.comment.localcatch.LocalCatch;
import com.yunchu.yapi.comment.localcatch.WxLoginSession;
import com.yunchu.yapi.comment.wxapp.WxAppCompent;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.mapper.YcAppUserMapper;
import com.yunchu.yapi.service.wxapp.LoginXcxService;
import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.system.handler.result.ResultEnum;
import com.yunchu.yapi.vo.WxUserLoginRequestVo;
import com.yunchu.yapi.vo.WxUserLoginResponseVo;
import com.yunchu.yapi.vo.wxapp.Jscode2sessionResponseVo;

@Service
public class LoginXcxServiceImpl implements LoginXcxService{
	
	@Autowired
	WxAppCompent wxappCompent;
	@Autowired
	YcAppUserMapper ycAppUserMapper;

	@Override
	public WxUserLoginResponseVo loginByCode(WxUserLoginRequestVo vo) {
		Jscode2sessionResponseVo wxSession = this.wxappCompent.getJscode2Session(vo.getCode());
		if(StringUtils.isBlank(wxSession.getOpenid()))
			throw new AppException(ResultEnum.MIM_LOGIN_NOOPENID_ERROR);
		List<YcAppUser> users = this.ycAppUserMapper.selectList(new QueryWrapper<YcAppUser>().eq("wx_openid", wxSession.getOpenid()));
		boolean isNewUser = CollectionUtils.isEmpty(users);
		YcAppUser user = isNewUser ? this.register(wxSession.getOpenid(), vo) : users.get(0);
		LocalCatch.putWXSession(user.getUucode(), wxSession);
		String sessionKey = WxLoginSession.put(user);
		return new WxUserLoginResponseVo(isNewUser, sessionKey);
	}

	private YcAppUser register(String openId, WxUserLoginRequestVo vo) {
		YcAppUser entity = new YcAppUser();
		entity.setAppId(this.wxappCompent.appid);
		entity.setLastLoginTime(new Date());
		entity.setUucode(UUID.randomUUID().toString());
		entity.setWxOpenid(openId);
		entity.setWxHead(vo.getAvatarUrl());
		entity.setWxName(vo.getNickName());
		this.ycAppUserMapper.insert(entity);
		return entity;
	}

}
