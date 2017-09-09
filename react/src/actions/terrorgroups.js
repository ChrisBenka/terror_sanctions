import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api',
  timeout: 1000,
});

export function retriveAllTerrorGroups() {
  return dispatch => instance.get('/terror-groups/')
    .then((response) => {
      dispatch({ type: 'RETRIEVED_ALL_TERROR_GROUPS', response });
    })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Unable to retrieve terror groups information' });
    });
}

export function retrieveAllGeoJsons() {
  return dispatch => axios.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then((response) => {
      dispatch({ type: 'RETRIEVED_ALL_GEO_JSONS', response });
    })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Unable to retrieve gejson information' });
    });
}

export function addTerrorGroup(data) {
  return dispatch => instance.post('/terror-groups', data)
    .then(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'TerrorGroup Successfully Added' });
    })
    .catch(() => {
      dispatch({ type: 'SHOW_ALERT', message: 'Problem creating terror group' });
    });
}
