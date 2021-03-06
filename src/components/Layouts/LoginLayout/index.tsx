/*
 * @Date: 2019-06-24 20:25:24
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 20:09:59
 * @Description: 登录页背景布局组件
 */

import React from 'react';
import styles from "./index.less";

type Props = {
    loading:boolean
}

const LoginLayout:React.FC<Props>= ({ children, loading=false }) => {
    return (
        <div className={ styles["login-layout"] } key="loginLayout">
            {loading? '' : ''}
            <div className={styles.login}>
                {children}
            </div>
            <div className={styles.bg}>
                <span>Plan Your Work</span>
            </div>
        </div>
    );
};

export default LoginLayout;
