/*
 * @Date: 2019-06-20 14:42:40
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 17:43:50
 * @Description: 路由组件
 */

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

// 引入页面
const Login = React.lazy(() => import("@pages/login"));
const NotFound = React.lazy(() => import("@pages/notfound"));
const Project = React.lazy(() => import("@pages/project"));
const ProjectAdd = React.lazy(() => import("@pages/project/add"));



// 路由
const GetRouter:React.FC = (props) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/manage/login" component={Login}/>
            <Route exact path="/" render={() => <Redirect to='/manage/project'></Redirect>}/>
            <Route exact path="/manage/project" component={Project}/>
            <Route exact path="/manage/project/add" component={ProjectAdd}/>
            <Route component={NotFound}/>
        </Switch>
    </React.Suspense>
);

export default inject("authStore")(observer(GetRouter));