import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_CREATE_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  employees: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEES_CREATE_SUCCESS:
      return { ...state, employees: { ...action.payload } };
    case EMPLOYEE_SAVE_SUCCESS:
      return { ...state, name: '', phone: '', shift: '' };
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
