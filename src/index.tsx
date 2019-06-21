import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import * as _  from 'lodash';
import App from './pages/app';
import stores from "./stores";


ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById("root")
);