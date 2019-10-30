import { initialState } from "stores";
import {
  REGISTER_USER,
  LOGIN_USER,
  DELETE_USER,
  DISPLAY_USERS,
  GET_ALL_CELEBS,
  GET_CELEBS_FAIL,
  START_QUIZ,
  CAPTURE_RESPONSE
} from "actions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return state;
    case LOGIN_USER:
      return state;
    case DELETE_USER:
      return state;
    case DISPLAY_USERS:
      return state;
    case GET_ALL_CELEBS:
      return { ...state, celebrities: action.payload };
    case GET_CELEBS_FAIL:
      return state;
    case START_QUIZ:
      return state;
    case CAPTURE_RESPONSE:
      return {
        ...state,
        points: !state.points ? action.payload : state.points + action.payload
      };
    default:
      return state;
  }
};
