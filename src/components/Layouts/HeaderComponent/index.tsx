/*
 * @Date: 2019-07-05 11:02:12
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-10 17:50:15
 * @Description: 头部组件
 */
import * as React from 'react';
import { PageHeader, Icon } from "antd";
import { observer } from "mobx-react";
const styles = require('./index.less');

type Props = {
    projectName:string;
    userName:string;
}

type UserProps = {
    userName:string;
}

const UserComponent:React.FC<UserProps> = observer((props) => (
    <div style={{display:'flex',alignItems:'center'}}>
        {props.userName}<Icon style={{marginLeft:'10px',fontSize:'20px'}} type="poweroff" />
    </div>
))

const HeaderComponent:React.FC<Props> = observer((props) => {
    return (
        <PageHeader 
            className={styles.header}
            title={props.projectName}
            extra={
                <UserComponent userName={props.userName}/>
            }
        />
    );
});

export default HeaderComponent;