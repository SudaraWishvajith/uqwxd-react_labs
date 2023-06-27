import {combineReducers} from 'redux'

const counter = (state=0,action) => {
    if(action.type === 'INCREMENT'){
        // This will increment the value of counter by the value passed to the increment method
        return state + action.inc;
    }
    //returns currnet value of the counter
    return state;
}

const myReducers = combineReducers({counter});

export default myReducers;