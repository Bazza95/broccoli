import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import KnowledgeCenter from './components/knowledge-center';
import Tools from './components/tools';
import Stories from './components/stories';
import Dashboard from './components/dashboard';
import Feedback from './components/feedback';

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
                <AuthRoute exact path={"/knowledgeCenter"} component={KnowledgeCenter} />
                <AuthRoute exact path={"/tools"} component={Tools} />
                <AuthRoute exact path={"/stories"} component={Stories} />
                <AuthRoute exact path={"/feedback"} component={Feedback} />
            </Switch>
        </BrowserRouter>
		)
	}
}

export default Routes;