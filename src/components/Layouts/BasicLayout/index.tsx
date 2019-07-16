/*
 * @Date: 2019-06-24 20:25:24
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 20:08:10
 * @Description: 基本的布局组件
 */

import React from 'react';
import { AntdHeader } from "@components/index";
import { observer } from "mobx-react";
import { Layout } from "antd";
import styles from "./index.less";

const { Header, Content } = Layout;

type Props = {
    loading:boolean;
    projectName:string;
    userName:string;
}

const BasicLayout:React.FC<Props>= (observer(({ children, loading=false, ...props}) => {
    return (
        <Layout className={ styles["basic-layout"] } key="basicLayout">
            {loading? '' : ''}
            <Header className={styles["header"] }>
                <AntdHeader projectName={props.projectName} userName={props.userName} />
            </Header>
            <Content>
                {children}
            </Content>
        </Layout>
    );
}));

export default BasicLayout;
