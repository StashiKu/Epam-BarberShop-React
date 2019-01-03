import { handleActions } from 'redux-actions';

import { loginRequest, loginReceive, loginFailure, addLoginCred } from '../actions/loginActions';

import { logoutRequest, logoutReseive } from '../actions/loginActions'; 

const initialState = {
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    loading: false, 
    isLoginFail: false,
    user: {
        username: '', 
        password: '',
    }
}

export default handleActions({
    [loginRequest]: (state, action) => {
        return {
            ...state,
            loading: true
        }
    },
    [loginReceive]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: true
        }
    }, 
    [loginFailure]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false,
            isLoginFail: true
        }
    },
    [addLoginCred]: (state, action) => {
        return {
            ...state,
            user: {...state.user, ...action.payload}
        }
    },
    [logoutRequest]: (state, action) => {
        return {
            ...state,
            loading: true,
        }
    },
    [logoutReseive]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthenticated: false
        }
    }
}, initialState)