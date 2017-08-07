import React from 'react';
import { BrowserRouter, Match, Miss } from 'react-router';
import Home from '../Home';
import NotFound from '../../components/NotFound';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';

const App = () => (
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={Home} />
      <Match pattern="/login" component={Login} />
      <Match pattern="/sign-up" component={Signup} />
      <Miss component={NotFound} />
    </div>
  </BrowserRouter>
);
export default App;
