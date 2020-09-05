package com.yunchu.yapi.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.yunchu.yapi.comment.upload.UpLoadImg;
import com.yunchu.yapi.service.FileUploadService;
import com.yunchu.yapi.system.handler.result.Result;

@Service
public class FileUploadServiceImpl implements FileUploadService{
	
	@Autowired
	UpLoadImg uploadImg;

	@Override
	public Result uploadImg(MultipartFile img) {
		String path = uploadImg.transfer(img, "-wx");
		return Result.ok(path);
	}

	@Override
	public Result delfile(String uuid) {
		// TODO Auto-generated method stub
		return null;
	}

}