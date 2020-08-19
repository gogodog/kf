package com.yunchu.api.comment.localcatch;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.yunchu.api.vo.wxapp.Jscode2sessionResponseVo;

@Component
public class LocalCatch {//后期优化可替换为redis等组件，现在坐本地化缓存
	
	public static final Map<String, Jscode2sessionResponseVo> WX_SESSION = new HashMap<>();
	
	public static String getWXSessionKey(String uucode){
		if(LocalCatch.WX_SESSION.containsKey(uucode))
			return LocalCatch.getWXSession(uucode).getSession_key();
		return null;
	}
	
	public static Jscode2sessionResponseVo getWXSession(String uucode){
		return LocalCatch.WX_SESSION.get(uucode);
	}
	
	public static boolean putWXSession(String uucode, Jscode2sessionResponseVo wxSession){
		return LocalCatch.WX_SESSION.put(uucode, wxSession) != null;
	}

}
