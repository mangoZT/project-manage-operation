/*
 * @Date: 2019-07-15 19:26:28
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-16 11:01:42
 * @Description: 表格组件，新增&详情
 */
import React from 'react';
import { Form, Row, Col } from 'antd';
import { observer } from "mobx-react";
import styles from "./index.less";

const { Item:FormItem } = Form;

type TextProps = {
    title:string
}

const AntdText:React.FC<TextProps> = observer(({ title, children }) => {
    return (
        <div
            className={styles.textStyle}
        >
            <span>{ title?title+'：':'' }</span><span>{children}</span>
        </div>
    );
});

type EditProps = {
    title:string
}


const AntdEdit:React.FC<EditProps> = observer(({ title, children, ...props }) => {
    return (
        <Row>
            <Col span={16}>
                <FormItem
                    label={title}
                    labelCol={{ span:4 }}
                    wrapperCol={{ span:12 }}
                    {...props}
                >
                    {
                        children
                    }
                </FormItem>
            </Col>
        </Row>
    );
});

export default { AntdText, AntdEdit };
