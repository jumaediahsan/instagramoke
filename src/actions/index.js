import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SPINNER_LOGIN,
  EMAIL_CREATED,
  PASSWORD_CREATED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_FAIL,
  SPINNER_SIGNUP
 } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const emailCreated = (text) => {
  return {
    type: EMAIL_CREATED,
    payload: text
  };
};

export const passwordCreated = (text) => {
  return {
    type: PASSWORD_CREATED,
    payload: text
  };
};

//*** fungtion for login **//

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type:LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main()
};
const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL })
}

export const loginUser = ({ email, password }) =>{
  return(dispatch) => {
    dispatch({type: SPINNER_LOGIN })

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
  };
};


//*** fungtion for login **//

//*** fungtion for sign up **//
const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user
  });
  Actions.auth()
};

const signupFail = (dispatch) => {
  dispatch ({ type: SIGNUP_FAIL })
}

export const siginupUser = ({ email, password }) => {
  return(dispatch) => {
    dispatch({type:SPINNER_SIGNUP})

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => signupUserSuccess(dispatch, user))
    .catch(()=> signupFail(dispatch));
  };
};


//*** fungtion for sign up **//
