import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'register/', {
    username,
    email,
    password
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'login/', {
    username,
    password
  });
};

const getNotes = () => {
  return axios.get(API_URL + 'notes/');
};

const getNoteDetail = (noteId) => {
  return axios.get(API_URL + `notes/${noteId}/`);
};

const createNote = (audioFile) => {
  let formData = new FormData();
  formData.append('audio', audioFile);
  return axios.post(API_URL + 'notes/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const transcribeNote = (noteId) => {
  return axios.post(API_URL + `notes/${noteId}/transcribe/`);
};

const summarizeNote = (noteId) => {
  return axios.post(API_URL + `notes/${noteId}/summarize/`);
};

export default {
  register,
  login,
  getNotes,
  getNoteDetail,
  createNote,
  transcribeNote,
  summarizeNote
};