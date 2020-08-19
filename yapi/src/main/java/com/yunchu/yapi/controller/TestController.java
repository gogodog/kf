package com.yunchu.yapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yunchu.yapi.entity.User;
import com.yunchu.yapi.mapper.UserMapper;
import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.system.handler.result.Result;

@RestController
@RequestMapping("/test")
public class TestController {
	
	@Autowired
	UserMapper userMapper;

	@GetMapping("/hi")
    public String getHello() {
        return "HI, YUNCHU";
    }
	
	@GetMapping("/users")
    public Object users(int p, int s) {
		IPage<User> userPage = new Page<>(p, s);
		userPage = userMapper.selectPage(userPage, null);
        return Result.ok(userPage.getRecords());
    }
	
	@GetMapping("/deluser")
    public Object delUser(int id) {
        this.userMapper.deleteById(id);
        throw new AppException("删除异常");
    }
	
}
