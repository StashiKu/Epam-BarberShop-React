import { combineReducers } from 'redux';

import createAppointment from './createAppointmentReducer';
import login from './loginReducer';
import changeAppointment from './changeAppointmentReducer';
import signUp from './signUpReducer';

export default combineReducers({
    createAppointment,
    login, 
    changeAppointment,
    signUp
})