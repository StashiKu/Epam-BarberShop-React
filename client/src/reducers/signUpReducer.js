import { handleActions } from 'redux-actions';

import { signUpRequest, signUpReceive, signUpFailure, addSignUpCred } from '../actions/signUpActions';

const initialState = {
    isAuthorised: false,
    loading: false, 
    isLoginFail: false,
    user: {
        username: '',
        fullname: '',
        password: '',
        email: '',
    }
}

export default handleActions({
    [signUpRequest]: (state, action) => {
        return {
            ...state,
            loading: true
        }
    },
    [signUpReceive]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthorised: true
        }
    }, 
    [signUpFailure]: (state, action) => {
        return {
            ...state,
            loading: false,
            isAuthorised: false,
            isLoginFail: true
        }
    }, 
    [addSignUpCred]: (state, action) => {
        return {
            ...state,
            user: {...state.user, ...action.payload}
        }
    }
}, initialState)