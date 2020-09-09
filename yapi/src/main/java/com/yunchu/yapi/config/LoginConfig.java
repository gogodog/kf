package com.yunchu.yapi.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.yunchu.yapi.aspect.login.LoginInterceptor;

@Configuration
public class LoginConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		// 注册TestInterceptor拦截器
		InterceptorRegistration registration = registry.addInterceptor(new LoginInterceptor());
		registration.excludePathPatterns( // 添加不拦截路径
				"/min/proxy/**",
				"/imgstore/**",
				"/error");
		registration.addPathPatterns("/**"); // 所有路径都被拦截
	}
}
