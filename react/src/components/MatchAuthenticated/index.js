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
  reportType?: string,
}

const MatchAuthenticated = ({
  pattern,
  exactly,
  isAuthenticated,
  willAuthenticate,
  router,
  component: Component,
  reportType,
}: Props) => (
  <Match
    exactly={exactly}
    pattern={pattern}
    render={(props) => {
      if (isAuthenticated) { return <Component {...props} router={router} reportType={reportType} />; }
      if (willAuthenticate) { return null; }
      if (!willAuthenticate && !isAuthenticated) { return <Redirect to={{ pathname: '/login' }} />; }
      return null;
    }}
  />);

MatchAuthenticated.defaultProps = {
  exactly: true,
};

export default MatchAuthenticated;
