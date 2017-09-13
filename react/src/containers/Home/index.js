import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import WorldMap from '../Map';
import histogram from '../../components/histogram';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }  

  handleLogout() {
    this.props.logout(this.props.router);
  }

  render() {
    const { isAuthenticated, router } = this.props;
    return (
      <div className="container align-middle home">
        {isAuthenticated &&
          <div>
            <WorldMap router={router} />
            <div className="histogram" >
              histogram here
            </div>
          </div>
        }
      </div>
    );
  }
}

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired, //  eslint-disable-line
  isAuthenticated: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired, //  eslint-disable-line
};

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.currentUser,
});

const mergeProps = (state, actions, ownProps) => ({
  ...state,
  ...actions,
  ...ownProps,
});

export default connect(mapStateToProps, { logout }, mergeProps)(Home);
