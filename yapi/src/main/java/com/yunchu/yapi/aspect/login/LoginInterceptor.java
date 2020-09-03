package com.yunchu.yapi.aspect.login;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.HandlerInterceptor;

import com.yunchu.yapi.comment.localcatch.WxLoginSession;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.system.handler.result.ResultEnum;
import lombok.extern.log4j.Log4j2;

/**
 * sessionKey 校验
 * 
 * @author cott.wen
 *
 */
@Log4j2
public class LoginInterceptor implements HandlerInterceptor {

	/**
	 * 在请求处理之前进行调用（Controller方法调用之前）
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
		log.debug("loginInterceptor request uri:" + request.getRequestURI());
		String sessionKey = request.getHeader("sessionKey");
		if (WxLoginSession.isExist(sessionKey)){
			YcAppUser user = WxLoginSession.getUserInfo(sessionKey);
			request.setAttribute("user", user);
			return true;
		}
		throw new AppException(ResultEnum.NO_LOGIN);
	}

}