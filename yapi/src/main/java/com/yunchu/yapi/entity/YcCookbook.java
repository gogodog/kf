package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
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
 * @since 2020-08-22
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_cookbook")
@ApiModel(value="YcCookbook对象", description="")
public class YcCookbook extends Model<YcCookbook> {


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

    @ApiModelProperty(value = "制作方法")
    @TableField("attion")
    private String attion;

    @ApiModelProperty(value = "制作方法")
    @TableField("method")
    private String method;

    @ApiModelProperty(value = "制作方法")
    @TableField("desc")
    private String desc;

    @ApiModelProperty(value = "uuid")
    @TableField("user_code")
    private String userCode;

    @ApiModelProperty(value = "微信用户名称")
    @TableField("user_wx_name")
    private String userWxName;

    @ApiModelProperty(value = "微信头像")
    @TableField("user_wx_head")
    private String userWxHead;

    @ApiModelProperty(value = "创建时间")
    @TableField("create_time")
    private LocalDateTime createTime;

    @ApiModelProperty(value = "修改时间")
    @TableField("update_time")
    private LocalDateTime updateTime;

    @ApiModelProperty(value = "是否删除 0 未删除 1删除")
    @TableField("delete_flag")
    @TableLogic
    private Boolean deleteFlag;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
