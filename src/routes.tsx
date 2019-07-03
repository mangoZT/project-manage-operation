/*
 * @Date: 2019-06-20 14:42:40
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-28 10:47:14
 * @Description: 路由组件
 */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面
const Login = React.lazy(() => import("@pages/login"));
const NotFound = React.lazy(() => import("@pages/notfound"));


// 路由
const getRouter = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route component={NotFound}/>
        </Switch>
    </React.Suspense>
);

export default getRouter;