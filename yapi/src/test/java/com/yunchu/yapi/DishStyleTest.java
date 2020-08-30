package com.yunchu.yapi;

import java.util.UUID;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.yunchu.yapi.entity.YcDishStyle;
import com.yunchu.yapi.mapper.YcDishStyleMapper;
import com.yunchu.yapi.service.YcDishStyleService;

import lombok.extern.log4j.Log4j2;

@RunWith(SpringRunner.class)
@SpringBootTest
@Log4j2(topic="DishStyleTest")
public class DishStyleTest {
	
	@Autowired
	YcDishStyleService ycDishStyleService;
	@Autowired
	YcDishStyleMapper ycDishStyleMapper;
	
	public static final String TEMP_INSERT = "INSERT INTO yc_dish_style ( code, cnname, p_id ) VALUES ( '%s', '%s', '%s' );";
	
	@Test
	public void insertData(){
		String data = "烧 炒 爆 焖 炖 蒸 煮 拌 烤 炸 烩 溜 氽 腌 卤 炝 煎 酥 扒 熏 煨 酱 煲 烘焙 火锅 砂锅 拔丝 生鲜 调味 技巧 烙 榨汁 冷冻 焗 焯 干煸 干锅 铁板 微波 其他";
		String[] arr= data.split(" ");
		int count = 0;
		for (String val : arr) {
			count += insertOne(val);
		}
		log.info("插入数据总量："+count);
	}

	private int insertOne(String val) {
		String sql = String.format(TEMP_INSERT, UUID.randomUUID().toString(), val, 16);
		System.out.println(sql);
		return 1;
		
//		YcDishStyle entity = new YcDishStyle();
//		entity.setCnname(val);
//		entity.setCode(UUID.randomUUID().toString());
//		entity.setPId(-1L);
//		return this.ycDishStyleMapper.insert(entity);
	}

}
