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
	
	private static final boolean IS_DEBUG = false;

	/**
	 * 在请求处理之前进行调用（Controller方法调用之前）
	 * @throws InterruptedException 
	 */
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws InterruptedException {
		log.info("loginInterceptor request uri:" + request.getRequestURI());
		if(IS_DEBUG){
			YcAppUser user = new YcAppUser();
			user.setUucode("c902c8be-c97b-466b-8d55-315fce5b062e");
			request.setAttribute("user", user);
			return true;
		}
		String sessionKey = request.getHeader("sessionKey");
		if (WxLoginSession.isExist(sessionKey)){
			YcAppUser user = WxLoginSession.getUserInfo(sessionKey);
			request.setAttribute("user", user);
			return true;
		}
		throw new AppException(ResultEnum.NO_LOGIN);
	}

}