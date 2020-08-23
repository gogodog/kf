package com.yunchu.yapi.tools;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang3.time.DateUtils;

public class DateUtil extends DateUtils{

	/**
	 * 
	 */
	public static final String CN_FORMAT = "YYYY年MM月dd日";
	
	public static String simpleDate(Date date, String format){
		SimpleDateFormat sf = new SimpleDateFormat(format);
		return sf.format(date);
	}

}
