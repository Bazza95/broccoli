import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Dashboard from './components/dashboard';

import AuthRoute from './AuthRoute';

/*
 * This class contains all the routing information for our app. Each component group maps to a different route.
 */

class Routes extends Component {
	render(){
		return (
        <BrowserRouter>
            <Switch>
                <AuthRoute exact path={"/"} component={Dashboard} />
            </Switch>
        </BrowserRouter>
		)
	}
}

export default Routes;