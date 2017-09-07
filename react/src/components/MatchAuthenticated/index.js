// @flow
import React from 'react';
import { Match, Redirect } from 'react-router';

type Props = {
  component: any,
  pattern: string,
  exactly?: boolean, 
  isAuthenticated: boolean,
  willAuthenticate: boolean,
  router: object,
}

const MatchAuthenticated = ({
  pattern,
  exactly,
  isAuthenticated,
  willAuthenticate,
  router,
  component: Component,
}: Props) => (
  <Match
    exactly={exactly}
    pattern={pattern}
    render={(props) => {
      if (isAuthenticated) { return <Component {...props} router={router} />; }
      if (willAuthenticate) { return null; }
      if (!willAuthenticate && !isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
      return null;
    }}
  />);

export default MatchAuthenticated;
