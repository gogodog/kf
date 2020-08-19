package com.yunchu.yapi.system.handler.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

/**
 * 异常工具类
 * @author cott.wen
 *
 */
public class ExceptionUtils {
	
	private ExceptionUtils() {
		throw new IllegalStateException("ExceptionUtils is utility class");
	}
	
	/**
     * 收集异常堆栈信息
     * @param e
     * @return
     */
	public static String collectExceptionStackMsg(Exception e) {
		StringWriter write = new StringWriter();
		e.printStackTrace(new PrintWriter(write, true));
		return "\nheap&stack : " + write.toString();
	}
}
