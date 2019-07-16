/*
 * @Date: 2019-07-03 18:50:01
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 14:51:20
 * @Description: 项目列表组件
 */

import React,{ useEffect } from 'react';
import { inject, observer } from "mobx-react";
import { BasicLayout } from "@components/index";
import { Button, Icon } from "antd";
import styles from "./index.less";


const Project = inject("authStore", "appStore", "projectStore")(observer(({ appStore, authStore, projectStore, history }) => {
    
    /**
     * @description: hooks自动获取项目列表
     * @param {type} 
     * @return: void
     */
    useEffect(() => {
        projectStore.getProjectList(authStore.userName);
    },[authStore.userName]);

    /**
     * @description: 用户点击项目模块进入项目
     * @param {id} 
     * @return: void
     */  
    const handleClick = (id:string):void => {
        history.push("/manage/project/add");
    };

    /**
     * @description: 用户点击新增进入详情页
     * @param {e} 
     * @return: void
     */    
    const handleDetail = ():void => {
        history.push("/manage/project/add");
    };

    return (
        <BasicLayout loading={false} projectName={appStore.projectName} userName={authStore.userName} >
            <div className={styles["project-box"]}>
                <Button onClick={handleClick.bind(null, 120)} >小鲸喜</Button>
                {
                    
                }
                <Button onClick={handleDetail} ><Icon type="plus" /></Button>
            </div>
        </BasicLayout>
    )
}));

export default Project;