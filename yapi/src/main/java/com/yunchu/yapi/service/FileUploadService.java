package com.yunchu.yapi.service;

import org.springframework.web.multipart.MultipartFile;

import com.yunchu.yapi.system.handler.result.Result;

public interface FileUploadService {

	Result uploadImg(MultipartFile img);

	Result delfile(String uuid);

}
