/*
 * @Date: 2019-07-03 18:50:01
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 14:44:37
 * @Description: 项目编辑&新增组件
 */

import React from 'react';
import { inject, observer } from "mobx-react";
import { BasicLayout, AntdLine, AntdCard } from "@components/index";
import { Button, Form, Input } from "antd";
import styles from "./index.less";

const FormItem = Form.Item;
const { AntdEdit } = AntdLine;
const { TextArea } =Input;

const ProjectAdd = Form.create()(inject("projectStore", "appStore", "authStore")(observer(({appStore, authStore, form}) => {
    
    /**
     * @description: 用户点击保存项目
     * @param {e}: e
     * @return: void
     */  
    const handleSave = () => {
        
    };

    const { getFieldDecorator } = form;

    return (
        <BasicLayout loading={false} projectName={appStore.projectName} userName={authStore.userName} >
            <div className={styles["project-box"]}>
                <Form>
                    <AntdCard
                        title="基本信息"
                    >
                        <AntdEdit title={'项目名称'} >
                            {
                                getFieldDecorator('name', {
                                    rules: [{
                                        required: true,
                                        message: '请填写项目名称'
                                    }]
                                })(
                                    <Input maxLength={20} />
                                )
                            }
                        </AntdEdit>
                        <AntdEdit title={'项目头像'} >
                            {
                                getFieldDecorator('avatar', {
                                })(
                                    <Input maxLength={20} />
                                )
                            }
                        </AntdEdit>
                        <AntdEdit title={'项目描述'} >
                            {
                                getFieldDecorator('description', {
                                })(
                                    <TextArea rows={4} />
                                )
                            }
                        </AntdEdit>
                    </AntdCard>
                    <AntdCard
                        title="人员信息"
                    >
                        <AntdEdit title={''} >
                            {
                                getFieldDecorator('memberList', {
                                })(
                                    
                                )
                            }
                        </AntdEdit>
                    </AntdCard>
                </Form>
            </div>
        </BasicLayout>
    )
})));

export default ProjectAdd;