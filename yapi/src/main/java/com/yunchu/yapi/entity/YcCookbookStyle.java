package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.yunchu.yapi.tools.GsonUtil;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author cott.wen
 * @since 2020-09-01
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_cookbook_style")
@ApiModel(value="YcCookbookStyle对象", description="")
public class YcCookbookStyle extends Model<YcCookbookStyle> {


    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "食谱ID")
    @TableField("cookbook_id")
    private Long cookbookId;

    @ApiModelProperty(value = "类型ID")
    @TableField("style_id")
    private Long styleId;

    @ApiModelProperty(value = "英文名称")
    @TableField("style_enname")
    private String styleEnname;

    @ApiModelProperty(value = "中文名称")
    @TableField("style_cnname")
    private String styleCnname;

    @ApiModelProperty(value = "描述")
    @TableField("style_miaoshu")
    private String styleMiaoshu;

    @ApiModelProperty(value = "父ID")
    @TableField("style_p_id")
    private Long stylePId;

    @ApiModelProperty(value = "创建时间")
    @TableField("create_time")
    private Date createTime;

    @ApiModelProperty(value = "修改时间")
    @TableField("update_time")
    private Date updateTime;

    @ApiModelProperty(value = "是否删除 0 未删除 1删除")
    @TableField("delete_flag")
    @TableLogic
    private Boolean deleteFlag;
    
    @ApiModelProperty(value = "标签样式")
    @TableField(exist = false)
    private Map<String, Object> cstyleMiaoshu;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }
    
    public Map<String, Object> getCstyleMiaoshu(){
    	if(StringUtils.isBlank(this.styleMiaoshu))
    		return null;
    	return GsonUtil.GsonToGsonObject(this.styleMiaoshu);
    }

}
