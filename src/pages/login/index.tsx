/*
 * @Date: 2019-06-21 17:01:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 11:08:00
 * @Description: 登录UI组件
 */

import React from 'react';
import { inject, observer } from "mobx-react";
import { LoginLayout, AntdCard } from "@components/index";
import { Button, Row, Input, Icon } from "antd";
import login from "@images/login.png";
import styles from "./index.less";

type Props ={
    history:any;
    authStore:{
        login():void
        setuserName(userName:string):void
        setPassword(password:string):void
    }
}

const Login:React.FC<Props> = inject("authStore")(observer(({ authStore, history }) => {
    
    /**
     * @description: 用户点击登录按钮，获取用户名密码登录
     * @param {e}
     * @return: void
     */  
    const handleSubmit = ():void => {
        // authStore.login();
        history.push("/manage/project");
    };

    /**
     * @description: 
     * @param {type,ev:} :字段类型 dom元素
     * @return: 
     */    
    const handleChange = (type:string, ev:React.ChangeEvent<HTMLInputElement> ):void => {
        const { value } = ev.target;
        if(type==="userName"){
            authStore.setuserName(ev.target.value)
        }else{
            authStore.setPassword(ev.target.value)
        }
    }

    return (
        <LoginLayout loading={false}>
            <AntdCard>
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
            </AntdCard>
        </LoginLayout>
    )
}))

export default Login;