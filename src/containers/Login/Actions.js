import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from './Constants';

export function getLogin() {
    return {
        type: LOGIN_REQUEST
    };
}
export function getLoginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        data,
    };
}
export function getLoginError(error) {
    return {
        type: LOGIN_ERROR,
        error,
    };
}

export function getLoginMethod(requestPayload) {
    return dispatch => {
        dispatch(getLogin());
        fetch(`https://demo7643920.mockable.io/login`, {
            method: 'POST',
            ContentType: 'application / json',
            body: JSON.stringify(requestPayload),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(getLoginSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(getLoginError(error));
            })
    }
}

