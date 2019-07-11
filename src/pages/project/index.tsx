/*
 * @Date: 2019-07-03 18:50:01
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-10 17:44:37
 * @Description: 项目列表组件
 */

import * as React from 'react';
import { inject, observer } from "mobx-react";
import { BasicLayout } from "@components/index";
import { Button, Icon } from "antd";
const login = require("@images/login.png");
const styles = require('./index.less');


const Project = inject("authStore", "appStore")(observer((props) => {
    
    /**
     * @description: 用户点击项目模块进入项目
     * @param {e}: e
     * @return: void
     */  
    const handleClick = () => {
        
    };

    return (
        <BasicLayout loading={false} projectName={props.appStore.projectName} userName={props.authStore.userName} >
            <div className={styles["project-box"]}>
                <Button>小鲸喜</Button>
                <Button>小鲸喜</Button>
                <Button>小鲸喜</Button>
                <Button>小鲸喜</Button>
                <Button>小鲸喜</Button>
                <Button>小鲸喜</Button>
                <Button>小鲸喜</Button>
                <Button><Icon type="plus" /></Button>
            </div>
        </BasicLayout>
    )
}));

export default Project;