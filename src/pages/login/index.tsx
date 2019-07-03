/*
 * @Date: 2019-06-21 17:01:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 16:50:23
 * @Description: 登录UI组件
 */

import * as React from 'react';
import { inject, observer } from "mobx-react";
import { Layouts } from "@components/index";
import { Button, Form, Input, Icon } from "antd";
const login = require("@images/login.png");
const styles = require('./index.less');


const { Item } = Form;
const Login = Form.create()(inject("authStore")(observer((props) => {
    
    /**
     * @description: 用户点击登录按钮，获取用户名密码登录
     * @param {e}: e
     * @return: void
     */  
    const handleSubmit = () => {
        props.authStore.login()
    };

    const { getFieldDecorator } = props.form;
 

    return (
        <Layouts loading={false}>
            <div className={styles["login-box"]}>
                <img className={styles["login-icon"]} src={login} />
                <Form className={styles["login-form"]}>
                    <Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名' }],
                    })(
                        <Input
                        size="large"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                        />
                    )}
                    </Item>
                    <Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input
                        size="large"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                        />
                    )}
                    </Item>
                    <Item style={{textAlign:'right'}}>
                    <Button size="large" type="primary" onClick={handleSubmit} htmlType="submit" className={styles["login-form-button"]}>
                        登录
                    </Button>
                    </Item>
                </Form>
            </div>
        </Layouts>
    )
})))

export default Login;