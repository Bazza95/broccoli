import {combineReducers} from 'redux';
import Acronym from './acronym-reducer';

const rootReducer = combineReducers({
    acronyms: Acronym
});

const allReducers = (state, action) => {
    if(action.type === 'LOG_OUT'){
        state = undefined;
    }
    return rootReducer(state, action);
};

export default allReducers;
