/*
 * @Date: 2019-06-21 17:01:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-11 11:28:59
 * @Description: 登录UI组件
 */

import * as React from 'react';
import { inject, observer } from "mobx-react";
import { LoginLayout } from "@components/index";
import { Button, Row, Input, Icon, Card } from "antd";
const login = require("@images/login.png");
const styles = require('./index.less');

type Props ={
    authStore:{
        login:() =>{}
        setuserName:(userName:string)=>{}
        setPassword:(password:string)=>{}
    }
}

const Login:React.FC<Props> = inject("authStore")(observer((props) => {
    
    /**
     * @description: 用户点击登录按钮，获取用户名密码登录
     * @param {e}
     * @return: void
     */  
    const handleSubmit = () => {
        props.authStore.login();
    };

    /**
     * @description: 
     * @param {type:string,ev:Event} :字段类型，获取字段
     * @return: 
     */    
    const handleChange = (type:string, ev ) => {
    //    props.authStore.setuserName(ev);
        console.log(ev)
    }

    return (
        <LoginLayout loading={false}>
            <Card className={styles["login-box"]} bordered={false}>
                <img className={styles["login-icon"]} src={login} />
                <div className={styles["login-form"]}>
                    <Row className={styles.row}>
                        <Input
                            size="large"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                            onChange={handleChange.bind(null, "userName")}
                        />
                    </Row>
                    <Row className={styles.row}>
                        <Input
                            size="large"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="请输入密码"
                            onChange={handleChange.bind(null, "password")}
                        />
                    </Row>
                    <Row className={styles.row} style={{textAlign:'right'}}>
                        <Button size="large" type="primary" onClick={handleSubmit} htmlType="submit" className={styles["login-form-button"]}>
                            登录
                        </Button>
                    </Row>
                </div>
            </Card>
        </LoginLayout>
    )
}))

export default Login;