package com.yunchu.api.system.handler.exception;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yunchu.api.system.handler.result.Result;
import com.yunchu.api.system.handler.result.ResultEnum;
import lombok.extern.slf4j.Slf4j;
import javax.servlet.http.HttpServletRequest;

/**
 * 异常捕获
 * 
 * appException:业务异常v
 * 
 * @author cott.wen
 *
 */
@ControllerAdvice
@ResponseBody
@Slf4j(topic="异常处理Advice")
public class ExceptionAdvice {
	
	@ExceptionHandler(value = AppException.class)
	public Result appException(HttpServletRequest request, AppException e) {
		String code = e.getCode();
		String msg = e.getMessage();

		if (e.getCode() == null) {
			code = ResultEnum.EXCEPTION.getCode();
		}
		if (e.getMessage() == null) {
			msg = ResultEnum.EXCEPTION.getMsg();
		}
		log.info("服务异常",e);
		return Result.fail(code, msg);
	}
	
	@ExceptionHandler(value = Exception.class)
	public Result defaultException(HttpServletRequest request, Exception e) {
		String msg = ExceptionUtils.collectExceptionStackMsg(e);
		log.info("222{}",msg,e);
		return Result.fail(ResultEnum.EXCEPTION);
	}
}
