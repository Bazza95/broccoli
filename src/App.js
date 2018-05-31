import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

import allReducers from './reducers';

import Routes from './Routes';

import './App.css';

const theme = createMuiTheme();
const logger = createLogger();
const store = createStore(
    allReducers,
	compose(
		applyMiddleware(thunk, promise, logger),
		autoRehydrate()
	)
);

/**
 * The container for our React app. This is the base where all of our other components are loaded in.
 */
class App extends Component {
    constructor() {
        super();
        this.state = { rehydrated: false }
    }
    // This setup makes the app wait on reload before attempting to render the app
    componentWillMount(){
        persistStore(store, {}, () => {
            this.setState({ rehydrated: true })
        });
    }
	render(){
		return (
            !this.state.rehydrated ? <div>...</div> :
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <Routes />
                </MuiThemeProvider>
            </Provider>
		)
	}
}

export default App;
