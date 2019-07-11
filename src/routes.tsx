/*
 * @Date: 2019-06-20 14:42:40
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 19:00:15
 * @Description: 路由组件
 */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { type } from 'os';

// 引入页面
const Login = React.lazy(() => import("@pages/login"));
const NotFound = React.lazy(() => import("@pages/notfound"));
const Project = React.lazy(() => import("@pages/project"));



// 路由
const GetRouter:React.FC = (props) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" to="/project"/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/project" component={Project}/>
            <Route component={NotFound}/>
        </Switch>
    </React.Suspense>
);

export default inject("authStore")(observer(GetRouter));