package com.yunchu.yapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.yunchu.yapi.service.FileUploadService;
import com.yunchu.yapi.system.handler.result.Result;


@RestController
@RequestMapping("/store")
public class FileUploadController {
	
	@Autowired
	FileUploadService fileUploadService;
	
	@RequestMapping("/upload/img")
    public Result uploadImg(@RequestParam("img") MultipartFile img) {
		return fileUploadService.uploadImg(img);
    }
	
	@RequestMapping("/del/{uuid}")
    public Result delfile(@RequestParam("uuid") String uuid) {
        return fileUploadService.delfile(uuid);
    }

}
