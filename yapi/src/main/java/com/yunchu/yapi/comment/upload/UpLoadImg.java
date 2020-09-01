package com.yunchu.yapi.comment.upload;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import org.springframework.web.multipart.MultipartFile;

import com.yunchu.yapi.system.handler.exception.AppException;
import com.yunchu.yapi.system.handler.result.ResultEnum;

import lombok.extern.log4j.Log4j2;

@Component
@PropertySource("classpath:application.yml")
@Log4j2(topic = "upload image >>>")
public class UpLoadImg {

	@Value("${sglobal.imgpath}")
	public String imgWarehouse;
	
	@Value("${sglobal.imgurl}")
	public String imgURL;
	
	//http://localhost/yapi/imgstore/b7a6ef92-d76d-461c-ad27-afe3cd83510e-wx.png

	public String transfer(MultipartFile image, String solt) {
		String filename = UUID.randomUUID() + solt + this.getSuffixName(image.getOriginalFilename());// 文件上传后重命名数据库存储
		File dest = new File("/Users/cott.wen/Desktop/kf/yapi/src/main/resources/static/imgstore", filename);
		try {
			image.transferTo(dest);// 拷贝文件到指定路径储存
			return imgURL + filename;
		} catch (Exception e) {
			log.error(e);
			throw new AppException(ResultEnum.FILEFAIL);
		}
	}

	private String getSuffixName(String filename) {
		if (StringUtils.isBlank(filename))
			throw new AppException(ResultEnum.FILEFAIL);
		return filename.substring(filename.lastIndexOf("."));
	}
	
	private String getRealStaticPath(){
		try {
			String path = ResourceUtils.getURL("classpath:").getPath()+"static/imgstore";
			log.info("path:"+path);
			return path;
//			return path.replace('/', '\\').substring(1,path.length());
		} catch (FileNotFoundException e) {
			throw new AppException(ResultEnum.FILEFAIL);
		}
	}

}
