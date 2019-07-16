/*
 * @Date: 2019-07-16 11:34:49
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 14:51:10
 * @Description: 人员查询组件
 */
import React,{ useEffect } from 'react';
import { inject, observer } from "mobx-react";
import { BasicLayout } from "@components/index";
import { Button, Icon } from "antd";
import styles from "./staffQuery.less";


const StaffQuery = inject("projectStore")(observer(({ projectStore, history }) => {
    
    /**
     * @description: 删除指定用户
     * @param {id} 
     * @return: void
     */  
    const handleClick = (id:string):void => {
        history.push("/manage/project/add");
    };

    /**
     * @description: 搜索新增指定用户
     * @param {e} 
     * @return: void
     */    
    const handleDetail = ():void => {
        history.push("/manage/project/add");
    };

    return (
        <div className={styles["project-box"]}>
            <Button onClick={handleClick.bind(null, 120)} >小鲸喜</Button>
            <Button onClick={handleDetail} ><Icon type="plus" /></Button>
        </div>
    )
}));

export default StaffQuery;