import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from './containers/Login/index';
import DashboardContainer from './containers/Dashboard/index';
import NotFoundComponent from './NotFound';

export default function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={LoginContainer} />
                <Route path='/dashboard' component={DashboardContainer} />
                <Route path='*' component={NotFoundComponent}></Route>
            </Switch>
        </main>
    );
}