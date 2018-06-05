import {combineReducers} from 'redux';
import Veggies from './broccoli-reducer';

const rootReducer = combineReducers({
    veggies: Veggies
});

const allReducers = (state, action) => {
    if(action.type === 'LOG_OUT'){
        state = undefined;
    }
    return rootReducer(state, action);
};

export default allReducers;
