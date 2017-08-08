// @flow
import React from 'react';
import { Match, Redirect } from 'react-router';

type Props = {
  component: any,   //eslint-disable-line
  pattern: string,
  exactly?: boolean,    //eslint-disable-line
  isAuthenticated: boolean,
  willAuthenticate: boolean,
}

const RedirectAuthenticated = ({
  pattern,
  exactly,
  isAuthenticated,
  willAuthenticate,
  component: Component,
}: Props) => (
  <Match
    exactly={exactly}
    pattern={pattern}
    render={(props) => {
      if (isAuthenticated) { return <Redirect to={{ pathname: '/' }} />; }
      if (willAuthenticate) { return null; }
      if (!willAuthenticate && !isAuthenticated) { return <Component {...props} />; }
      return null;
    }}
  />);


export default RedirectAuthenticated;
