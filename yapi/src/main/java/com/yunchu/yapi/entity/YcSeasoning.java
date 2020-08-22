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
@TableName("yc_seasoning")
@ApiModel(value="YcSeasoning对象", description="")
public class YcSeasoning extends Model<YcSeasoning> {


    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    @ApiModelProperty(value = "中文名称")
    @TableField("cnname")
    private String cnname;

    @ApiModelProperty(value = "英文名称")
    @TableField("enname")
    private String enname;

    @ApiModelProperty(value = "图片HTTP")
    @TableField("avatar")
    private String avatar;

    @ApiModelProperty(value = "mg,g,kg,cl,cj,ak,al(重量单位)")
    @TableField("ctype")
    private String ctype;

    @ApiModelProperty(value = "0:默认，1:其它")
    @TableField("type")
    private Boolean type;

    @ApiModelProperty(value = "0:充足，1:多，2:少量，3:无")
    @TableField("status")
    private Boolean status;

    @ApiModelProperty(value = "描述，json字符串")
    @TableField("info")
    private String info;

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
