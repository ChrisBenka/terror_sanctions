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

const RedirectAuthenticated = ({
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
      if (isAuthenticated) { return <Redirect to={{ pathname: '/' }} />; }
      if (willAuthenticate) { return null; }
      if (!willAuthenticate && !isAuthenticated) {
        return <Component {...props} router={router} />;
      }
      return null;
    }}
  />);

RedirectAuthenticated.defaultProps = {
  exactly: true,
};

export default RedirectAuthenticated;
