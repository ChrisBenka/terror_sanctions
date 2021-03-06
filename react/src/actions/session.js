import { reset } from 'redux-form';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000,
});

function setCurrentUser(dispatch, response) {
  localStorage.setItem('token', JSON.stringify(response.data.meta.token));
  dispatch({ type: 'AUTHENTICATION_SUCCESS', response });
}

export function login(data, router) {
  return dispatch => instance.post('/sessions', data)
    .then((response) => {
      setCurrentUser(dispatch, response);
      dispatch(reset('login'));
      router.transitionTo('/');
    }).catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Invalid email or password' });
    });
}

export function signup(data, router) {
  return dispatch => instance.post('/users', data).then((response) => {
    setCurrentUser(dispatch, response);
    dispatch(reset('signup'));
    router.transitionTo('/');
  }).catch(() => {
    dispatch({ type: 'SHOW_ALERT', message: 'That username or email has alreadly been taken' });
  });
}

export function logout(router) {
  return dispatch => instance.delete('/sessions')
    .then(() => {
      localStorage.removeItem('token');
      dispatch({ type: 'LOGOUT' });
      router.transitionTo('/login');
    });
}

export function authenticate() {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATION_REQUEST' });
    return instance.post('/sessions/refresh')
      .then((response) => {
        setCurrentUser(dispatch, response);
      })
      .catch(() => {
        localStorage.removeItem('token');
        window.location = '/login';
      });
  };
}

export function route(link, router) {
  router.transitionTo(link);
}

export const unauthenticate = () => ({ type: 'AUTHENTICATION_FAILURE' });
