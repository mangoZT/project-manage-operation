/*
 * @Date: 2019-06-18 17:53:50
 * @Author: zhuhu
 * @LastEditors: zhuhu
 * @LastEditTime: 2019-07-03 18:52:58
 * @Description: 项目入口
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
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