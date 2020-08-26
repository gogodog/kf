package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import java.util.Date;

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
 * @since 2020-08-26
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_dish_style")
@ApiModel(value="YcDishStyle对象", description="")
public class YcDishStyle extends Model<YcDishStyle> {


    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@ApiModelProperty(value = "标准ID")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "编号")
    @TableField("code")
    private String code;

    @ApiModelProperty(value = "中文名称")
    @TableField("cnname")
    private String cnname;

    @ApiModelProperty(value = "英文名称")
    @TableField("enname")
    private String enname;

    @ApiModelProperty(value = "父ID")
    @TableField("p_id")
    private Long pId;

    @ApiModelProperty(value = "描述")
    @TableField("miaoshu")
    private String miaoshu;

    @ApiModelProperty(value = "0:未发布，1:已发布")
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

}
