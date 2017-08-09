// @flow
import React, { Component, PropTypes } from 'react';
import { BrowserRouter, Miss } from 'react-router';
import { connect } from 'react-redux';
import { authenticate, unauthenticate } from '../../actions/session';
import Home from '../Home';
import NotFound from '../../components/NotFound';
import Login from '../Login';
import Signup from '../Signup';
import MatchAuthenticated from '../../components/MatchAuthenticated';
import RedirectAuthenticated from '../../components/RedirectAuthenticated';
import Sidebar from '../../components/Sidebar';
import DashboardNavbar from '../DashboardNavbar';
import Alert from '../Alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.authenticate();
    } else {
      this.props.unauthenticate();
    }
  }


  render() {
    const { isAuthenticated, willAuthenticate } = this.props;
    const authProps = { isAuthenticated, willAuthenticate };

    return (
      <BrowserRouter>
        {({ location }) => (
          <div>
            {isAuthenticated &&
              <DashboardNavbar {...authProps} />
            }
            <div style={{ display: 'flex', flex: '1' }}>
              {isAuthenticated &&
                <Sidebar />
              }
              <Alert pathname={location.pathname} />
              <MatchAuthenticated exactly pattern="/" component={Home} {...authProps} />
              <RedirectAuthenticated pattern="/login" component={Login} {...authProps} />
              <RedirectAuthenticated pattern="/signup" component={Signup} {...authProps} />
              <Miss component={NotFound} />
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authenticate: PropTypes.func.isRequired,
  unauthenticate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  willAuthenticate: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    willAuthenticate: state.session.willAuthenticate,
  }),
  { authenticate, unauthenticate },
)(App);
