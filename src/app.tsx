/*
 * @Date: 2019-06-20 14:42:29
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-15 17:27:38
 * @Description: 路由导航容器组件
 */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import GetRouter from './routes';

const App = inject('appStore')(observer((props) => {
    return (
        <Router basename="/">
            {/* 这里放导航之类的东西 */}
            {<GetRouter />}
        </Router>
    )
}))

export default App;
