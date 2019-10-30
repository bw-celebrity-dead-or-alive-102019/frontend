import { axiosWithAuth } from "auth";
export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const DELETE_USER = "DELETE_USER";
export const DISPLAY_USERS = "DISPLAY_USERS";
export const GET_ALL_CELEBS = "GET_ALL_CELEBS";
export const GET_CELEBS_FAIL = "GET_CELEBS_FAIL";
export const START_QUIZ = "START_QUIZ";
export const CAPTURE_RESPONSE = "CAPTURE_RESPONSE";

export const registerUser = (name, user, pass) => dispatch => {
  dispatch({
    type: REGISTER_USER,
    payload: { name: name, username: user, password: pass }
  });
};

export const loginUser = (user, pass) => dispatch => {
  dispatch({
    type: LOGIN_USER
  });
};

export const deleteUser = () => dispatch => {
  dispatch({ type: DELETE_USER });
};

export const displayUsers = () => dispatch => {
  dispatch({ type: DISPLAY_USERS });
};

export const getCelebs = () => dispatch => {
  axiosWithAuth()
    .get("https://celebs-dead-or-alive.herokuapp.com/celebs")
    .then(res => {
      dispatch({ type: GET_ALL_CELEBS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const startQuiz = () => dispatch => {
  dispatch({ type: START_QUIZ });
};

export const captureResponse = response => dispatch => {
  dispatch({ type: CAPTURE_RESPONSE, payload: response });
};
