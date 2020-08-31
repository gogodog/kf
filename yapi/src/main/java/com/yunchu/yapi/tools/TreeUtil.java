package com.yunchu.yapi.tools;

import java.util.ArrayList;
import java.util.List;

import com.yunchu.yapi.entity.YcDishStyle;

public class TreeUtil {

	//把一个List转成树
    public static List<YcDishStyle> buidTree(List<YcDishStyle> list){
        List<YcDishStyle> tree=new ArrayList<>();
        for(YcDishStyle node:list){
            if(node.getPId() == -1){
                tree.add(findChild(node,list));
            }
        }
        return tree;
    }
 
    private static YcDishStyle findChild(YcDishStyle node, List<YcDishStyle> list){
        for(YcDishStyle n:list){
            if(n.getPId().equals(node.getId())){
                if(node.getChildren() == null){
                    node.setChildren(new ArrayList<YcDishStyle>());
                }
                node.getChildren().add(findChild(n,list));
            }
        }
        return node;
    }

	
}
