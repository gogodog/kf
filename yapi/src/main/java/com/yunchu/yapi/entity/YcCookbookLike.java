package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import java.util.Date;
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
 * @since 2020-09-05
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_cookbook_like")
@ApiModel(value="YcCookbookLike对象", description="")
public class YcCookbookLike extends Model<YcCookbookLike> {


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
    @TableField("u_uucode")
    private String uUucode;

    @ApiModelProperty(value = "用户名称")
    @TableField("u_name")
    private String uName;

    @ApiModelProperty(value = "用户头像")
    @TableField("u_head")
    private String uHead;

    @ApiModelProperty(value = "用户id")
    @TableField("u_openid")
    private String uOpenid;

    @ApiModelProperty(value = "创建时间")
    @TableField("create_time")
    private Date createTime;

    @ApiModelProperty(value = "修改时间")
    @TableField("update_time")
    private Date updateTime;

    @Override
    protected Serializable pkVal() {
        return this.id;
    }

}
