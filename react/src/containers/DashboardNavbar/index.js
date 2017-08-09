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
    this.props.logout(this.context.router);
  }
  render() {
    const { currentUser, isAuthenticated } = this.props;

    return (
      <nav className="pt-navbar pt-dark blue-color-theme modifier">
        <div className="pt-navbar-group pt-align-left dashboard-navbar-left-links">
          <img src="src/assets/images/home/logo.png" className="dashboard-nav-logo pull-left" alt="" />
          <div className="pt-navbar-heading">Terror Sanctions</div>
          <input className="pt-input" placeholder="Search files..." type="text" />
        </div>
        <div className="pt-navbar-group pt-align-right dashboard-navbar-right-links">
          {isAuthenticated &&
            <span>{currentUser.data.username}</span>
          }
          <button className="pt-button pt-minimal pt-icon-home"><Link className="dashboard-nav-link" to="/">Home</Link></button>
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

DashboardNavbar.contextTypes = {
  router: PropTypes.object,
};
DashboardNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired, //eslint-disable-line
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    isAuthenticated: state.session.isAuthenticated,
    currentUser: state.session.currentUser,
  }), { logout },
)(DashboardNavbar);
