/*
 * @Date: 2019-07-16 10:58:31
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 11:09:09
 * @Description: 封装面板组件
 */
import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

type IAntdCard = {
    title?:React.ReactNode|string;
}

const AntdCard:React.FC<IAntdCard> = ({ title, children, ...props }) => {
    return (
        <Card
            bordered={false}
            className={styles.cardStyle}
            loading={false}
            title={title?<b>{title}</b>:false}
            {...props}
        >
            { children }
        </Card>
    );
};
export default AntdCard;
