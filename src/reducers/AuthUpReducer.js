import {
  EMAIL_CREATED,
  PASSWORD_CREATED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_FAIL,
  SPINNER_SIGNUP
} from '../actions/types';

const INITIAL_STATE ={
  email: '',
  password: '',
  user: null,
  error: '',
  loading:false

}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMAIL_CREATED:
      return { ...state, email: action.payload };
    case PASSWORD_CREATED:
      return { ...state, password: action.payload };
    case SPINNER_SIGNUP:
      return {...state, loading: true, error:''};
    case SIGNUP_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload, error: '', loading:false };
    case SIGNUP_FAIL:
      return {...state, ...INITIAL_STATE, error:'Fill the Form! with correct', loading: false, password: ''};
    default:
      return state;
  }
};
