import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { inject, observer } from "mobx-react";
import getRouter from '@/routes';

const App = inject('appStore')(observer((props) => {
    return (
        <Router>
            {/* 这里放导航之类的东西 */}
            {getRouter()}
        </Router>
    )
}))

export default App;
