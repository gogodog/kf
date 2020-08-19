package com.yunchu.yapi.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.yunchu.yapi.tools.GsonUtil;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableField;
import java.io.Serializable;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;

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
 * @since 2020-08-19
 */
@Data
@EqualsAndHashCode(callSuper = false)
@Accessors(chain = true)
@TableName("yc_food")
@ApiModel(value="YcFood对象", description="")
public class YcFood extends Model<YcFood> {


    /**
	 * 
	 */
	private static final long serialVersionUID = 2262758582783655190L;

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

    @ApiModelProperty(value = "0:其它，1:蔬菜，2:水果，3:海鲜，4:调料")
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
    
    public YcFoodInfo getInfoc(){
    	if(StringUtils.isBlank(this.info))
    		return null;
    	return GsonUtil.GsonToBean(this.info, YcFoodInfo.class);
    }

}
