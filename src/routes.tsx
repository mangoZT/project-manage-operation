import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// 引入页面
const Home = React.lazy(() => import("@pages/login"));
const NotFound = React.lazy(() => import("@pages/notfound"));


// 路由
const getRouter = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    </React.Suspense>
);

export default getRouter;