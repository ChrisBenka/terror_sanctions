import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import session from './session';
import alert from './alert';
import individuals from './individuals';
import terrorgroups from './terrorgroups';
import sanctionbodies from './sanctionbodies';

const appReducer = combineReducers({
  form,
  session,
  alert,
  individuals,
  terrorgroups,
  sanctionbodies,
});

export default function (state, action) {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}
