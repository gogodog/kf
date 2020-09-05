package com.yunchu.yapi.service;

import java.util.List;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yunchu.yapi.entity.YcAppUser;
import com.yunchu.yapi.entity.YcCookbook;

public interface YcStreetService {

	List<YcCookbook> streetRecommendList(Page<YcCookbook> page, YcAppUser user);

	List<YcCookbook>  streetAttionList(Page<YcCookbook> page, YcAppUser user);

}
