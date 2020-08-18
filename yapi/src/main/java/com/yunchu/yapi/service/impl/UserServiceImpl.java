package com.yunchu.yapi.service.impl;

import com.yunchu.yapi.entity.User;
import com.yunchu.yapi.mapper.UserMapper;
import com.yunchu.yapi.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author cott.wen
 * @since 2020-08-17
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {

}
