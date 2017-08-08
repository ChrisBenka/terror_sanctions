import React from 'react';
import { Link } from 'react-router';

const DashboardNavbar = () => (
  <nav className="pt-navbar pt-dark blue-color-theme modifier">
    <div className="pt-navbar-group pt-align-left">
      <img src="src/assets/images/home/logo.png" className="dashboard-nav-logo pull-left" alt="" />
      <div className="pt-navbar-heading">Terror Sanctions</div>
      <input className="pt-input" placeholder="Search files..." type="text" />
    </div>
    <div className="pt-navbar-group pt-align-right">
      <button className="pt-button pt-minimal pt-icon-home"><Link className="dashboard-nav-link" to="/">Home</Link></button>
      <button className="pt-button pt-minimal pt-icon-document">Files</button>
      <span className="pt-navbar-divider" />
      <button className="pt-button pt-minimal pt-icon-user" />
      <button className="pt-button pt-minimal pt-icon-notifications" />
      <button className="pt-button pt-minimal pt-icon-cog" />
    </div>
  </nav>
);

export default DashboardNavbar;
