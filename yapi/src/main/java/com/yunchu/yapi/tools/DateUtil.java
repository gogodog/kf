package com.yunchu.yapi.tools;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang3.time.DateUtils;

public class DateUtil extends DateUtils{

	/**
	 * 
	 */
	public static final String CN_FORMAT = "YYYY年MM月dd日";
	public static final String CN_FORMAT_1 = "yyyy/MM/dd HH:mm:ss";
	public static final String CN_FORMAT_2 = "yyyyMMdd";
	
	public static String simpleDate(Date date, String format){
		SimpleDateFormat sf = new SimpleDateFormat(format);
		return sf.format(date);
	}
	
	public static String getCurrentDate(){
		SimpleDateFormat sf = new SimpleDateFormat(CN_FORMAT_2);
		return sf.format(new Date());
	}

}
