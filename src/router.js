import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './containers/dashboard';
import Login from './containers/login';

const AppRouters = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
    </Router>
)
export default AppRouters