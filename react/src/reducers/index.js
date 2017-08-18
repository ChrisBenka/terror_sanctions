import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import session from './session';
import alert from './alert';
import individuals from './individuals'

const appReducer = combineReducers({
  form,
  session,
  alert,
  individuals,
});

export default function (state, action) {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
