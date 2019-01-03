import { createAction } from 'redux-actions';
import axios from 'axios';

export const loginRequest = createAction('[LogIn] Login request');
export const loginReceive = createAction('[Login] Login success');
export const loginFailure = createAction('[Login] Login failure');
export const addLoginCred = createAction('[LogIn] LogIn cred added')

export const logoutRequest = createAction('[LogOut] LogOut request')
export const logoutReseive = createAction('[LogOut] LogOut success')


export const loginUser = (creds) => (dispatch) => {
    dispatch(loginRequest());
    axios.post('/auth', creds)
        .then(res => {
            if (res.data.access_token) {
                localStorage.setItem('id_token', res.data.access_token);
                dispatch(loginReceive())
            } else {
                console.log(res.data);
                dispatch(loginFailure());
            }
        })
        .catch(() => dispatch(loginFailure()))
}

export const addLoginProp = (data) => (dispatch) => {
    dispatch(addLoginCred(data))
}

export const logoutUser = (dispatch) => {
    dispatch(logoutRequest());
    localStorage.removeItem('id_token');
    dispatch(logoutReseive())
}