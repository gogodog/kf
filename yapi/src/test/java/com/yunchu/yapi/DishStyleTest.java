package com.yunchu.yapi;

import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.google.gson.Gson;
import com.yunchu.yapi.entity.YcDishStyle;
import com.yunchu.yapi.mapper.YcDishStyleMapper;
import com.yunchu.yapi.service.YcDishStyleService;
import com.yunchu.yapi.tools.GsonUtil;

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
//		String data = "烧 炒 爆 焖 炖 蒸 煮 拌 烤 炸 烩 溜 氽 腌 卤 炝 煎 酥 扒 熏 煨 酱 煲 烘焙 火锅 砂锅 拔丝 生鲜 调味 技巧 烙 榨汁 冷冻 焗 焯 干煸 干锅 铁板 微波 其他";
//		String[] arr= data.split(" ");
//		int count = 0;
//		for (String val : arr) {
//			count += insertOne(val);
//		}
//		log.info("插入数据总量："+count);
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
	
	@Test
	public void inserColor(){
		
//		String colors = "[{\"title\":\"嫣红\",\"name\":\"red\",\"color\":\"#e54d42\"},{\"title\":\"桔橙\",\"name\":\"orange\",\"color\":\"#f37b1d\"},{\"title\":\"明黄\",\"name\":\"yellow\",\"color\":\"#fbbd08\"},{\"title\":\"橄榄\",\"name\":\"olive\",\"color\":\"#8dc63f\"},{\"title\":\"森绿\",\"name\":\"green\",\"color\":\"#39b54a\"},{\"title\":\"天青\",\"name\":\"cyan\",\"color\":\"#1cbbb4\"},{\"title\":\"海蓝\",\"name\":\"blue\",\"color\":\"#0081ff\"},{\"title\":\"姹紫\",\"name\":\"purple\",\"color\":\"#6739b6\"},{\"title\":\"木槿\",\"name\":\"mauve\",\"color\":\"#9c26b0\"},{\"title\":\"桃粉\",\"name\":\"pink\",\"color\":\"#e03997\"},{\"title\":\"棕褐\",\"name\":\"brown\",\"color\":\"#a5673f\"},{\"title\":\"玄灰\",\"name\":\"grey\",\"color\":\"#8799a3\"},{\"title\":\"草灰\",\"name\":\"gray\",\"color\":\"#aaaaaa\"},{\"title\":\"墨黑\",\"name\":\"black\",\"color\":\"#333333\"},{\"title\":\"雅白\",\"name\":\"white\",\"color\":\"#ffffff\"}]";
//		List<Map<String, Object>> list = GsonUtil.GsonToListGsonObject(colors);
//		String jiLu = "";
//		List<YcDishStyle> ycDishStyles = ycDishStyleMapper.selectList(new QueryWrapper<YcDishStyle>().eq("1", "1"));
//		for(int i = 0; i<ycDishStyles.size();  i++){
//			int index = (int) (Math.random() * list.size());
//			Map<String, Object> random = list.get(index);
//			if("black||gray||grey||white".contains(random.get("name").toString())){
//				i = i+1;
//				continue;
//			}
//			jiLu += "-" + index + "-";
//			YcDishStyle ys = ycDishStyles.get(i);
//			ys.setMiaoshu(GsonUtil.GsonString(random));
//			System.out.println(GsonUtil.GsonString(random));
//			this.ycDishStyleMapper.updateById(ys);
//		}
//		
//		for(int i = 0 ; i<list.size() ; i++){
//			System.out.println("index:" + i + "  次数:" + this.countString(jiLu, "-"+ i +"-"));
//		}
		
	
	
	}
	
	public int countString(String str,String s) {
		int count = 0,len = str.length();
		while(str.indexOf(s) != -1) {
			str = str.substring(str.indexOf(s) + 1,str.length());
			count++;
		}
		return count;
	}

}
