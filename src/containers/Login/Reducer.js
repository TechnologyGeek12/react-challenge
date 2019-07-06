import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './Constants';

const initialState = {
    loading: false,
    success: false,
    error: ''
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                'loading': true,
                'success': false,
                'error': ''
            });
        case LOGIN_ERROR:
            return Object.assign({}, state, {
                'loading': false,
                'success': false,
                'error': action
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                'loading': false,
                'success': true,
                'error': '',
                'loginResponse': action.data
            });
        default:
            return state;
    }
}

export default loginReducer;
