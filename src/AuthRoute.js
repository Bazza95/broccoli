import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from './components/nav';

const Layout = ({ component: Component}) => (
    <Route render={props => (
        <div className="layout">
            <Nav route={window.location.pathname} />
            <main>
                <Component {...props}/>
            </main>
        </div>
    )}/>
);

class AuthRoute extends React.Component {
    render(){
//         const isLogged = false;

//         if(this.props.path === "/" || this.props.path === "/true"){
//             if(isLogged) {
//                 return <Redirect to="/home" />;
//             }else {
//                 return <Route {...this.props} />;
//             }
//         }else {
//             if(isLogged){
                return <Layout {...this.props} />;
//             }else {
//                 return <Redirect to="/" />;
//             }
//         }
    }
}

export default AuthRoute;