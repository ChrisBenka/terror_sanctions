import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000,
});

export function retireveAllSanctionBodies() {
  return dispatch => instance.get('/sanction-bodies')
    .then((response) => {
      dispatch({ type: 'RETRIEVED_ALL_SANCTION_BODIES', response });
    })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Unable to retrieve sanctioned individuals' });
    });
}
