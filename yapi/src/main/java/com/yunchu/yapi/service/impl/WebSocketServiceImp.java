package com.yunchu.yapi.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import com.yunchu.yapi.handler.WebSocketHandler;
import com.yunchu.yapi.tools.GsonUtil;
import com.yunchu.yapi.vo.MessageRequestVo;
import com.yunchu.yapi.vo.MessageResponseVo;

import lombok.extern.log4j.Log4j2;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

@ServerEndpoint("/chat/{sid}")
@Component
@Log4j2(topic="chat")
public class WebSocketServiceImp {
	// 静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
	private static AtomicInteger onlineNum = new AtomicInteger();
	// concurrent包的线程安全Set，用来存放每个客户端对应的WebSocketServer对象。
	private static ConcurrentHashMap<String, Session> sessionPools = new ConcurrentHashMap<>();

	// 发送消息
	public void sendMessage(Session session, MessageResponseVo vo) throws IOException {
		if (session != null) {
			synchronized (session) {
				log.info("发送数据：" + GsonUtil.GsonString(vo));
				session.getBasicRemote().sendText(GsonUtil.GsonString(vo));
			}
		}
	}

	// 给指定用户发送信息
	public void sendInfo(String userName, MessageResponseVo message) {
		Session session = sessionPools.get(userName);
		try {
			sendMessage(session, message);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// 建立连接成功调用
	@OnOpen
	public void onOpen(Session session, @PathParam(value = "sid") String userName) {
		sessionPools.put(userName, session);
		addOnlineCount();
		try {
			sendMessage(session, WebSocketHandler.getServerOpenOkVo());
			log.info(userName,"连接成功");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	// 关闭连接时调用
	@OnClose
	public void onClose(@PathParam(value = "sid") String userName) {
		sessionPools.remove(userName);
		subOnlineCount();
		log.info(userName + "断开webSocket连接！当前人数为" + onlineNum);
	}

	// 收到客户端信息
	@OnMessage
	public void onMessage(String message) throws IOException {
		log.info("已收到信息：" + message);
		MessageRequestVo vo = GsonUtil.GsonToBean(message, MessageRequestVo.class);
		String sendMsg = GsonUtil.GsonStringReturnEmpty(vo);
		if(StringUtils.isNotBlank(sendMsg)){
			this.sendInfo(vo.getTo(), WebSocketHandler.getSendMessage(vo));		
		}else{
			this.sendInfo(vo.getFrom(), WebSocketHandler.getServerErrorVo());
		}
	}

	// 错误时调用
	@OnError
	public void onError(Session session, Throwable throwable) {
		log.info("发生错误");
		throwable.printStackTrace();
	}

	public static void addOnlineCount() {
		onlineNum.incrementAndGet();
	}

	public static void subOnlineCount() {
		onlineNum.decrementAndGet();
	}
}
