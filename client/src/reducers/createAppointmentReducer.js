import { handleActions } from 'redux-actions';
import { appointmentCreateComplete, 
         appointmentCreateFail,
         appointmentCreateStart  } from '../actions/createAppointmentActions';

const initialState = {
    appointment: {},
    loading: false,
    success: false,
    error: false,
}

export default handleActions({
    [appointmentCreateStart]: (state, action) => {
        return {
            ...state,
            loading: true
        }
    },
    [appointmentCreateComplete]: (state, action) => {
        return {
            ...state,
            appointment: {...state.appointment, ...action.payload},
            loading: false,
            success: true,
            error: false
        }
    },
    [appointmentCreateFail]: (state, action) => {
        return {
            ...state,
            loading: false,
            succes: false,
            error: true
        }
    },
}, initialState)