/*
 * @Date: 2019-07-15 19:35:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 11:01:00
 * @Description: 底部组件
 */

import React from 'react';
import { observer } from "mobx-react";
import styles from "./index.less";

const AntdFooter:React.FC = observer(({ children }) => {
    return (
        <div
            className={styles.footer}
        >
            {children}
        </div>
    );
});
export default AntdFooter;
