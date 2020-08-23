package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.google.gson.Gson;
import com.yunchu.yapi.tools.GsonUtil;
import com.baomidou.mybatisplus.annotation.TableId;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

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
 * @since 2020-08-23
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_cookbook")
@ApiModel(value="YcCookbook对象", description="")
public class YcCookbook extends Model<YcCookbook> {


    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "微信用户名称")
    @TableField("name")
    private String name;

    @ApiModelProperty(value = "微信头像")
    @TableField("img")
    private String img;

    @ApiModelProperty(value = "食材（json）")
    @TableField("food")
    private String food;

    @ApiModelProperty(value = "食材（json）")
    @TableField("seasoning")
    private String seasoning;

    @ApiModelProperty(value = "心法")
    @TableField("attion")
    private String attion;

    @ApiModelProperty(value = "制作方法")
    @TableField("method")
    private String method;

    @ApiModelProperty(value = "描述")
    @TableField("miaoshu")
    private String miaoshu;

    @ApiModelProperty(value = "uuid")
    @TableField("user_code")
    private String userCode;

    @ApiModelProperty(value = "微信用户名称")
    @TableField("user_wx_name")
    private String userWxName;

    @ApiModelProperty(value = "微信头像")
    @TableField("user_wx_head")
    private String userWxHead;

    @ApiModelProperty(value = "0:未发布，1:已发布，2:已删除")
    @TableField("status")
    private Boolean status;

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


    @Override
    protected Serializable pkVal() {
        return this.id;
    }
    
    public List<Map<String, Object>> getCfood(){
    	if(StringUtils.isBlank(this.food))
    		return null;
    	return GsonUtil.GsonToListGsonObject(this.food);
    }
    
    public List<Map<String, Object>> getCseasoning(){
    	if(StringUtils.isBlank(this.seasoning))
    		return null;
    	return GsonUtil.GsonToListGsonObject(this.seasoning);
    }

}
