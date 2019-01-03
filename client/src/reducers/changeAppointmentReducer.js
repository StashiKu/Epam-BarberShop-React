 import { handleActions } from 'redux-actions';

import { addItemToAppointment, resetAppointmentState } from '../actions/changeAppointmentActions';

const initialState = {
    appointment: {
        totalPrise: 0
    }
}

export default handleActions({
    [addItemToAppointment]: (state, action) => {
        return {
            ...state,
            appointment: {...state.appointment, ...action.payload},
        }
    },
    [resetAppointmentState]: (state, action) => {
        return {
            ...state,
            appointment: {totalPrise: 0}, 
        }
    }, 
}, initialState) 