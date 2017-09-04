import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import WorldMap from '../Map';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout(this.context.router);
  }

  render() {
    const { isAuthenticated, router } = this.props;
    return (
      <div className="container align-middle home">
        {isAuthenticated &&
          <div>
            <WorldMap router={router} />
          </div>
        }
      </div>
    );
  }
}
Home.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired, //eslint-disable-line
  isAuthenticated: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,  //eslint-disable-line
};

const mapStateToProps = (state) => {  //eslint-disable-line
  return {
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.currentUser,
  };
};

const mergeProps = (state, actions, ownProps) => {  //eslint-disable-line
  return {
    ...state,
    ...actions,
    ...ownProps,
  };
};

export default connect(mapStateToProps, { logout }, mergeProps)(Home);
