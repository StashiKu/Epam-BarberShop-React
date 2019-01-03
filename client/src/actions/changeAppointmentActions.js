import { createAction } from 'redux-actions';

export const addItemToAppointment = createAction('[ChangeAppointment] Add item');
export const resetAppointmentState = createAction('[ChangeAppointment] Reset appointment state');

export const addItem = (data) => (dispatch) => {
    dispatch(addItemToAppointment(data));
}

export const resetAppointment = () => (dispatch) =>  {
    dispatch(resetAppointmentState());
}

