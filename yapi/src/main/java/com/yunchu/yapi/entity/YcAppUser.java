package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.baomidou.mybatisplus.annotation.TableId;
import java.util.Date;

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
 * @since 2020-08-18
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_app_user")
@ApiModel(value="YcAppUser对象", description="")
public class YcAppUser extends Model<YcAppUser> {


    /**
	 * 
	 */
	private static final long serialVersionUID = 8330949216221899195L;

	@ApiModelProperty(value = "id")
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "uuid")
    @TableField("uucode")
    private String uucode;

    @ApiModelProperty(value = "微信用户名称")
    @TableField("wx_name")
    private String wxName;

    @ApiModelProperty(value = "微信openid")
    @TableField("wx_openid")
    private String wxOpenid;

    @ApiModelProperty(value = "微信头像")
    @TableField("wx_head")
    private String wxHead;

    @ApiModelProperty(value = "微信用户信息")
    @TableField("wx_info")
    private String wxInfo;

    @ApiModelProperty(value = "应用ID")
    @TableField("app_id")
    private String appId;

    @ApiModelProperty(value = "最后一次登录时间")
    @TableField("last_login_time")
    private Date lastLoginTime;

    @ApiModelProperty(value = "创建时间")
    @TableField("create_time")
    private Date createTime;

    @ApiModelProperty(value = "修改时间")
    @TableField("update_time")
    private Date updateTime;

    @ApiModelProperty(value = "是否删除 0 未删除 1删除")
    @TableField("delete_flag")
    private Boolean deleteFlag;


    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
