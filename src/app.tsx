/*
 * @Date: 2019-06-20 14:42:29
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-06-24 21:12:25
 * @Description: 路由导航容器组件
 */

import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import getRouter from './routes';

const App = inject('appStore')(observer((props) => {
    return (
        <Router>
            {/* 这里放导航之类的东西 */}
            {getRouter()}
        </Router>
    )
}))

export default App;
