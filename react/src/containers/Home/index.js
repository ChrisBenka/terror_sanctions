import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import SimpleExample from '../../components/Map';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout(this.context.router);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <div className="container align-middle home">
        {isAuthenticated &&
          <div>
            <SimpleExample />
          </div>
        }
      </div>
    );
  }
}
Home.contextTypes = {
  router: PropTypes.object,
};
Home.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired, //eslint-disable-line
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.currentUser,
  }), { logout },
)(Home);
