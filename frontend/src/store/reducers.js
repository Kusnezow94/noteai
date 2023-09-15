import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL, SET_MESSAGE, CLEAR_MESSAGE } from "./actions.js";
import { FETCH_NOTES_SUCCESS, FETCH_NOTES_FAIL, FETCH_NOTE_DETAIL_SUCCESS, FETCH_NOTE_DETAIL_FAIL } from "./actions.js";

const initialState = {
  user: null,
  isLoggedIn: false,
  message: "",
  notes: [],
  noteDetail: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
      };
    case FETCH_NOTES_FAIL:
      return {
        ...state,
        message: action.payload.message,
      };
    case FETCH_NOTE_DETAIL_SUCCESS:
      return {
        ...state,
        noteDetail: action.payload.noteDetail,
      };
    case FETCH_NOTE_DETAIL_FAIL:
      return {
        ...state,
        message: action.payload.message,
      };
    default:
      return state;
  }
};