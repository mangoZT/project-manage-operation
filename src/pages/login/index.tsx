/*
 * @Date: 2019-06-21 17:01:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-27 14:12:51
 * @Description: 登录UI组件
 */

import * as React from 'react';
import { inject, observer } from "mobx-react";
import { Layouts } from "@components/index";
import { Button, Form, Input } from "antd";



const Login = inject("authStore")(observer((props) => {
    
  /**
   * @description: 用户点击登录按钮，获取用户名密码登录
   * @param {e}: e
   * @return: void
   */  
  const handleSubmit = e => {
    e.preventDefault();
    props.authStore.login()
  };

    return (
        <Layouts>
            Login<Button type="primary">1231</Button>
        </Layouts>
    )
}))

export default Login;