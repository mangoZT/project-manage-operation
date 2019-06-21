import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import { Button } from 'antd';

const App = inject('appStore')(observer((props) => {
    return (
        <div className="header">
            {props.appStore.requestQuantity}
            <Button>这是一个按钮</Button>
            <Button type="primary">Primary</Button>
        </div>
    )
}))

export default App;
