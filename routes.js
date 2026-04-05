// Placeholder for routes
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShipNow from './ship-now';
import Dashboard from './dashboard';
import Login from './login';
import Signup from './signup';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/ship-now' component={ShipNow} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </Router>
    );
};

export default Routes;