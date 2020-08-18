package com.yunchu.api.system.handler.result;
import java.util.Date;

import lombok.Data;

@Data
public class Result {
    
    private String code;
    private String msg;
    private Date responseTime = new Date();
    private String serverIp = "yapi>local";
    private Object data;
    
    private Result() {}
    
    private Result(ResultEnum re) {
    	this.code = re.getCode();
    	this.msg = re.getMsg();
    }
    
    public static Result ok() {
        return Result.ok(ResultEnum.SUCCESS.getMsg());
    }
    
    public static Result ok(Object data) {
        Result result = new Result(ResultEnum.SUCCESS);
        result.setData(data);
        return result;
    }
    
    public static Result sysfail(String msg) {
    	Result result = new Result();
    	result.setCode(ResultEnum.FAIL.getCode());
        result.setMsg(msg);
        return result;
    }
    
    public static Result fail(String code, String msg) {
    	Result result = new Result();
    	result.setCode(code);
        result.setMsg(msg);
        return result;
    }
    
    public static Result fail(ResultEnum re) {
    	return fail(re.getCode(), re.getMsg());
    }
    
}