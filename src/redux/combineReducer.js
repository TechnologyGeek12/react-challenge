import { combineReducers } from 'redux';

import loginReducer from '../containers/Login/Reducer';
import { reducer as forms } from 'redux-form';

const rootReducer = combineReducers({
    loginReducer,
     form: forms
})

export default rootReducer;