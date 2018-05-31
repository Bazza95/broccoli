import React from 'react';
import {Route} from 'react-router-dom';

import Nav from './components/nav';
import Footer from './components/footer';

const Layout = ({ component: Component}) => (
    <Route render={props => (
        <div className="layout">
            <Nav route={window.location.pathname} />
            <main>
                <Component {...props}/>
            </main>
            <Footer />
        </div>
    )}/>
);

class AuthRoute extends React.Component {
    render(){
        return <Layout {...this.props} />;
    }
}

export default AuthRoute;