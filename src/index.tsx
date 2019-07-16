/*
 * @Date: 2019-06-18 17:53:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-12 19:44:58
 * @Description: 项目入口
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import _ from "lodash";
import App from "./app";
import stores from "./stores";
import  "./index.less";

// import '../mock/mock';

ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById("root")
);