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
import Feed from '../Feed';
import AddIndividual from '../AddIndividual';
import AddTerrorGroup from '../AddTerrorGroup';
import IndividualReport from '../IndividualReport';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
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
        {({ router, location }) => (
          <div>
            {isAuthenticated &&
              <DashboardNavbar {...authProps} router={router} />
            }
            <div style={{ display: 'flex', flex: '1' }}>
              {isAuthenticated &&
                <Sidebar router={router} />
              }
              <Alert pathname={location.pathname} />
              <MatchAuthenticated exactly pattern="/" component={Home} {...authProps} router={router} />
              <MatchAuthenticated exactly pattern="/individual-reports" component={Feed} location={location} {...authProps} router={router} />
              <MatchAuthenticated exactly pattern="/create-individual-report" component={AddIndividual} location={location} {...authProps} />
              <MatchAuthenticated exactly pattern="/create-terror-group-report" component={AddTerrorGroup} location={location} {...authProps} />
              <MatchAuthenticated exactly pattern="/terror-group-reports" component={Feed} location={location} {...authProps} />
              <MatchAuthenticated exactly pattern="/individual-report/:individualName/:individualID" location={location} {...authProps} component={IndividualReport} />
              <RedirectAuthenticated pattern="/login" component={Login} {...authProps} router={router} />
              <RedirectAuthenticated pattern="/signup" component={Signup} {...authProps} router={router} />
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
