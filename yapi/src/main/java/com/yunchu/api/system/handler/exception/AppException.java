package com.yunchu.api.system.handler.exception;

import com.yunchu.api.system.handler.result.ResultEnum;

import lombok.Getter;
import lombok.Setter;

/**
 * 服务异常类(继承运行时异常)
 * @author cott.wen
 *
 */
public class AppException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = -6280286155507426020L;
	
	@Getter@Setter
	private String code;

	public AppException(String msg){
        super(msg);
    }

	public AppException(ResultEnum resultEnum){
		super(resultEnum.getMsg());
		this.code = resultEnum.getCode();
	}

	public AppException(String code,String msg){
        super(msg);
        this.code=code;
    }
}
