

import { combineReducers } from 'redux';


import loginPageReducer from "./loginPageReducer";
import registerPageReducer from "./registerPageReducer";
import verifyPageReducer from "./verifyPageReducer";




export default combineReducers({
    loginPageReducer,
    registerPageReducer,
    verifyPageReducer
})
