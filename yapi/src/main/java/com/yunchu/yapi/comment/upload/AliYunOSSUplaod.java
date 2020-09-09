package com.yunchu.yapi.comment.upload;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.security.SecureRandom;
import java.util.Date;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.ObjectMetadata;
import com.yunchu.yapi.tools.DateUtil;
import lombok.extern.log4j.Log4j2;

@Component
@Log4j2
public class AliYunOSSUplaod {

	@Value("${aliyun.oss.endpoint}")
	private String ALIYUN_OSS_ENDPOINT;
	@Value("${aliyun.oss.accessKeyId}")
	private String ALIYUN_OSS_ACCESSKEYID;
	@Value("${aliyun.oss.accessKeySecret}")
	private String ALIYUN_OSS_ACCESSKEYSECRET;
	@Value("${aliyun.oss.bucketName}")
	private String ALIYUN_OSS_BUCKETNAME;
	
	
	private static final String VISIT_HTTPS = "https://ychu-cdn.oss-cn-beijing.aliyuncs.com/";
	public static final Boolean VISIT = true;
	public static final Boolean NOVISIT = true;

	public String uploadFile(MultipartFile multipartFile, boolean isVisit) throws IOException {
		OSS ossClient = new OSSClientBuilder().build(ALIYUN_OSS_ENDPOINT, ALIYUN_OSS_ACCESSKEYID, ALIYUN_OSS_ACCESSKEYSECRET);
		String objectName = this.getFilePath(multipartFile.getOriginalFilename());
		ossClient.putObject(ALIYUN_OSS_BUCKETNAME, objectName, new ByteArrayInputStream(multipartFile.getBytes()), this.getRequestHeader());
		Date expiration = new Date(System.currentTimeMillis() + 3600 * 1000);
		String url = isVisit ? this.getVisitUrl(objectName) : ossClient.generatePresignedUrl(ALIYUN_OSS_BUCKETNAME, objectName, expiration).toString();
		ossClient.shutdown();
		log.info("阿里云OSS的文件url:{}", url);
		return url;
	}
	
	private String getVisitUrl(String objectName){
		return VISIT_HTTPS+objectName;
	}
	
	private String getFilePath(String oldName){
		String suffixName = oldName.substring(oldName.lastIndexOf("."));
		String finalFileName = System.currentTimeMillis() + "" + new SecureRandom().nextInt(0x0400) + suffixName;
		return DateUtil.getCurrentDate() + "/" + finalFileName;
	}
	
	private ObjectMetadata getRequestHeader(){
		ObjectMetadata objectMetadata = new ObjectMetadata();
		objectMetadata.setContentType("image/jpg");
		return objectMetadata;
	}

}
