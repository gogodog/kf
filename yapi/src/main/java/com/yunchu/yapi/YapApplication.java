package com.yunchu.yapi;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import lombok.extern.log4j.Log4j2;

@SpringBootApplication
@MapperScan("com.yunchu.yapi.mapper")
@ComponentScan(basePackages = {"com.yunchu"})
@Log4j2(topic="YunChu.Application ==> ")
public class YapApplication {
	public static void main(String[] args) {
		SpringApplication.run(YapApplication.class, args);
		log.info("=================== YunChu started ==================================");
    }
}
