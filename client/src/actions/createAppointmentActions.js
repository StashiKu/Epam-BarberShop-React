import axios from 'axios';

import { createAction } from 'redux-actions';

export const appointmentCreateStart = createAction('[CreateAppointment] Appointment start');
export const appointmentCreateComplete = createAction('[CreateAppointment] Appointment created successfully');
export const appointmentCreateFail = createAction('[CreateAppointment] Appointment failed');

export const createAppointment = (data) => dispatch => {
    dispatch(appointmentCreateStart());
    axios.post('/api/appointment', data)
        .then(res => {
            if (res.data.code) {
                dispatch(appointmentCreateFail());
            } else {
                dispatch(appointmentCreateComplete(res.data));
            }
        })
        .catch((err) => {
            dispatch(appointmentCreateFail());
        })
}



