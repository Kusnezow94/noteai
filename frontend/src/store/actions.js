```javascript
import * as apiService from '../services/apiService';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTE_DETAIL_SUCCESS = 'FETCH_NOTE_DETAIL_SUCCESS';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const fetchNotesSuccess = (notes) => ({
  type: FETCH_NOTES_SUCCESS,
  payload: notes,
});

export const fetchNoteDetailSuccess = (noteDetail) => ({
  type: FETCH_NOTE_DETAIL_SUCCESS,
  payload: noteDetail,
});

export const login = (username, password) => async (dispatch) => {
  const user = await apiService.login(username, password);
  dispatch(loginSuccess(user));
};

export const fetchNotes = () => async (dispatch) => {
  const notes = await apiService.fetchNotes();
  dispatch(fetchNotesSuccess(notes));
};

export const fetchNoteDetail = (noteId) => async (dispatch) => {
  const noteDetail = await apiService.fetchNoteDetail(noteId);
  dispatch(fetchNoteDetailSuccess(noteDetail));
};
```