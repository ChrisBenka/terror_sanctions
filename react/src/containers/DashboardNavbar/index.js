import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../../actions/session';

class DashboardNavbar extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout(this.props.router);
  }

  render() {
    const { currentUser, isAuthenticated } = this.props;

    return (
      <nav className="pt-navbar pt-dark blue-color-theme modifier">
        <div className="pt-navbar-group pt-align-left dashboard-navbar-left-links">
          <img src="src/assets/images/home/logo.png" className="dashboard-nav-logo pull-left" alt="" />
          <div className="pt-navbar-heading">Terror Sanctions</div>
        </div>
        <div className="pt-navbar-group pt-align-right dashboard-navbar-right-links">
          {isAuthenticated &&
            <span>{currentUser.data.username}</span>
          }
          <button className="pt-button pt-minimal pt-icon-globe"><Link className="dashboard-nav-link" to="/">Map</Link></button>
          <button className="pt-button pt-minimal pt-icon-graph"><Link className="dashboard-nav-link" to="/">Graph</Link></button>
          <button className="pt-button pt-minimal pt-icon-document">Files</button>
          <span className="pt-navbar-divider" />
          <button className="pt-button pt-minimal pt-icon-user" />
          <button className="pt-button pt-minimal pt-icon-notifications" />
          <button className="pt-button pt-minimal pt-icon-cog" />
          <button className="pt-button pt-minimal pt-icon-log-out" onClick={this.handleLogout} />
        </div>
      </nav>
    );
  }
}

DashboardNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired, //  eslint-disable-line 
  isAuthenticated: PropTypes.bool.isRequired,
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

const mergeProps = (state, actions, ownProps) => ({
  ...state,
  ...actions,
  ...ownProps,
});

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.currentUser,
  }), { logout }, mergeProps,
)(DashboardNavbar);
