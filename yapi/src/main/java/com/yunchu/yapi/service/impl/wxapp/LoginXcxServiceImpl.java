package com.yunchu.yapi.service.impl.wxapp;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.CollectionUtils;
import com.yunchu.api.comment.localcatch.LocalCatch;
import com.yunchu.api.comment.wxapp.WxAppCompent;
import com.yunchu.api.system.handler.exception.AppException;
import com.yunchu.api.system.handler.result.ResultEnum;
import com.yunchu.api.vo.WxUserLoginResponseVo;
import com.yunchu.api.vo.wxapp.Jscode2sessionResponseVo;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.mapper.YcAppUserMapper;
import com.yunchu.yapi.service.wxapp.LoginXcxService;

@Service
public class LoginXcxServiceImpl implements LoginXcxService{
	
	@Autowired
	WxAppCompent wxappCompent;
	@Autowired
	YcAppUserMapper ycAppUserMapper;

	@Override
	public WxUserLoginResponseVo loginByCode(String code) {
		Jscode2sessionResponseVo wxSession = this.wxappCompent.getJscode2Session(code);
		if(StringUtils.isBlank(wxSession.getOpenid()))
			throw new AppException(ResultEnum.MIM_LOGIN_NOOPENID_ERROR);
		List<YcAppUser> users = this.ycAppUserMapper.selectList(new QueryWrapper<YcAppUser>().eq("wx_openid", wxSession.getOpenid()));
		boolean isNewUser = CollectionUtils.isEmpty(users);
		String uucode = isNewUser ? this.register(wxSession.getOpenid()) : users.get(0).getUucode();
		LocalCatch.putWXSession(uucode, wxSession);
		return new WxUserLoginResponseVo(isNewUser,wxSession.getOpenid(),code,uucode);
	}

	private String register(String openId) {
		YcAppUser entity = new YcAppUser();
		entity.setAppId(this.wxappCompent.appid);
		entity.setLastLoginTime(new Date());
		entity.setUucode(UUID.randomUUID().toString());
		entity.setWxOpenid(openId);
		this.ycAppUserMapper.insert(entity);
		return entity.getUucode();
	}

}
