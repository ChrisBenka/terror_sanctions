import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000,
});

export function retrieveAllTerrorGroups() {
  return dispatch => instance.get('/individuals')
    .then((response) => {
      dispatch({ type: 'RETRIEVED_ALL_INDIVIDUALS', response });
    })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Unable to retrieve sanctioned individuals' });
    });
}

export function getIndividual(individualID) {
  return dispatch => instance.get('individuals/' + individualID, { //  eslint-disable-line
  }).then((response) => {
    dispatch({ type: 'RETRIEVED_INDIVIDUAL', response });
  })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Problem retrieving individual' });
    });
}
