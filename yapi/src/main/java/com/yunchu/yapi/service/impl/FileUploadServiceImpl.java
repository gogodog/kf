package com.yunchu.yapi.service.impl;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.yunchu.yapi.comment.upload.AliYunOSSUplaod;
import com.yunchu.yapi.comment.upload.UpLoadImg;
import com.yunchu.yapi.service.FileUploadService;
import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.system.handler.result.Result;
import com.yunchu.yapi.system.handler.result.ResultEnum;

@Service
public class FileUploadServiceImpl implements FileUploadService{
	
	@Autowired
	UpLoadImg uploadImg;
	
	@Autowired
	AliYunOSSUplaod aliYunOSSUplaod;

	@Override
	public Result uploadImg(MultipartFile img) {
		//String path = uploadImg.transfer(img, "-wx");
		String path;
		try {
			path = this.aliYunOSSUplaod.uploadFile(img, AliYunOSSUplaod.VISIT);
		} catch (IOException e) {
			throw new AppException(ResultEnum.FILEFAIL);
		}
		return Result.ok(path);
	}

	@Override
	public Result delfile(String uuid) {
		// TODO Auto-generated method stub
		return null;
	}

}
