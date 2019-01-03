import { createAction } from 'redux-actions';
import axios from 'axios';

export const signUpRequest = createAction('[SignUp] SignUp request');
export const signUpReceive = createAction('[SignUp] SignUp success');
export const signUpFailure = createAction('[SignUp] SignUp failed');
export const addSignUpCred = createAction('[SignUp] SignUp cred added')

export const signUpUser = (creds) => (dispatch) => {
    dispatch(signUpRequest());
    axios.post('/signup', creds)
        .then(res => {
            dispatch(signUpReceive(res.creds))
        })
        .catch(() => dispatch(signUpFailure()))
}

export const addSignUpProp = (data) => (dispatch) => {
    dispatch(addSignUpCred(data))
}