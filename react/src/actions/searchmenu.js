import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000,
});

export function search() {
  return dispatch => instance.get('/search')
    .then((response) => {
      dispatch({ type: 'RETIREVED_SEARCH_DATA', response });
    })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Unable to retrieve data' });
    });
}

