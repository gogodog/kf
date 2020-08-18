package com.yunchu.api.comment.wxapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.yunchu.api.tools.GsonUtil;
import com.yunchu.api.vo.wxapp.Jscode2sessionResponseVo;

import lombok.extern.log4j.Log4j2;

@Component
@PropertySource("classpath:application.yml")
@Log4j2(topic="微信REQUEST组件")
public class WxAppCompent {
	
	@Value("${wxapp.appid}") 
    public String appid;
	@Value("${wxapp.secret}") 
	public String secret;
	@Autowired
	private RestTemplate restTemplate;
	
	private static final String JSCODE2SESSION_URL = "https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code";
	public Jscode2sessionResponseVo getJscode2Session(String code){
		return this.getJscode2Session(code, 0);
	}
    
    public Jscode2sessionResponseVo getJscode2Session(String code, int i){
    	String jscode2 = String.format(WxAppCompent.JSCODE2SESSION_URL, appid, secret, code);
    	ResponseEntity<String> response = this.restTemplate.getForEntity(jscode2, String.class);
    	log.info("request:", i, jscode2);
    	log.info("rsponse:", i, response);
    	if(response.getStatusCode().is2xxSuccessful() || i==2){
    		return GsonUtil.GsonToBean(response.getBody(), Jscode2sessionResponseVo.class);
    	}
    	return getJscode2Session(code, ++i);
    }

}
