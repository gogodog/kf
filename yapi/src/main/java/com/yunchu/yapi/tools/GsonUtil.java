package com.yunchu.yapi.tools;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

public class GsonUtil {
	// 不用创建对象,直接使用Gson.就可以调用方法
	private static Gson gson = null;
	private static Gson gson_date = null;
	// 判断gson对象是否存在了,不存在则创建对象
	static {
		if (gson == null) {
			gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		}
		if (gson_date == null) {
			gson_date = new GsonBuilder().setDateFormat("yyyy/MM/dd HH:mm:ss").create();
		}
	}

	// 无参的私有构造方法
	private GsonUtil() {
	}

	/**
	 * 将对象转成json格式
	 * 
	 * @param object
	 * @return String
	 */
	public static String GsonString(Object object) {
		String gsonString = null;
		if (gson != null) {
			gsonString = gson.toJson(object);
		}
		return gsonString;
	}
	
	/**
	 * 将对象转成json格式
	 * 
	 * @param object
	 * @return String
	 */
	public static String GsonStringReturnEmpty(Object object) {
		String gsonString = null;
		if (gson != null) {
			gsonString = gson.toJson(object);
		}
		return gsonString == null ? "" : gsonString;
	}

	/**
	 * 将json转成特定的cls的对象
	 * 
	 * @param gsonString
	 * @param cls
	 * @return
	 */
	public static <T> T GsonToBean(String gsonString, Class<T> cls) {
		T t = null;
		if (gson != null) {
			// 传入json对象和对象类型,将json转成对象
			t = gson.fromJson(gsonString, cls);
		}
		return t;
	}

	/**
	 * json字符串转成list
	 * 
	 * @param gsonString
	 * @param cls
	 * @return
	 */
	public static <T> List<T> GsonToList(String gsonString, Class<T> cls) {
		List<T> list = null;
		if (gson != null) {
			// 根据泛型返回解析指定的类型,TypeToken<List<T>>{}.getType()获取返回类型
			list = gson.fromJson(gsonString, new TypeToken<List<T>>() {}.getType());
		}
		return list;
	}

	/**
	 * json字符串转成list
	 * 
	 * @param gsonString
	 * @param cls
	 * @return
	 */
	public static <T> List<T> jsonToList(String json, Class<T> cls) {
		ArrayList<T> mList = new ArrayList<T>();
		JsonArray array = new JsonParser().parse(json).getAsJsonArray();
		for (final JsonElement elem : array) {
			mList.add(gson.fromJson(elem, cls));
		}
		return mList;
	}

	/**
	 * json字符串转成list中有map的
	 * 
	 * @param gsonString
	 * @return
	 */
	public static <T> List<Map<String, T>> GsonToListMaps(String gsonString) {
		List<Map<String, T>> list = null;
		if (gson != null) {
			list = gson.fromJson(gsonString, new TypeToken<List<Map<String, T>>>() {}.getType());
		}
		return list;
	}

	/**
	 * json字符串转成map的
	 * 
	 * @param gsonString
	 * @return
	 */
	public static <T> Map<String, T> GsonToMaps(String gsonString) {
		Map<String, T> map = null;
		if (gson != null) {
			map = gson.fromJson(gsonString, new TypeToken<Map<String, T>>() {}.getType());
		}
		return map;
	}
	
	/**
	 * json字符串转成map的
	 * 
	 * @param gsonString
	 * @return
	 */
	public static Map<String, Object> GsonToGsonObject(String gsonString) {
		Map<String, Object> map = null;
		if (gson != null) {
			map = gson.fromJson(gsonString, new TypeToken<Map<String, Object>>() {}.getType());
		}
		return map;
	}
	
	/**
	 * json字符串转成list中有map的
	 * 
	 * @param gsonString
	 * @return
	 */
	public static List<Map<String, Object>> GsonToListGsonObject(String gsonString) {
		List<Map<String, Object>> list = null;
		if (gson != null) {
			list = gson.fromJson(gsonString, new TypeToken<List<Map<String, Object>>>() {}.getType());
		}
		return list;
	}
}
