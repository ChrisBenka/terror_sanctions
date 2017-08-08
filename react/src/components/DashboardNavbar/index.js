import React from 'react';

const DashboardNavbar = () => (
  <nav className="pt-navbar pt-dark blue-color-theme modifier">
    <div className="pt-navbar-group pt-align-left">
      <img src="src/assets/images/home/logo.png" className="dashboard-nav-logo pull-left" alt="" />
      <div className="pt-navbar-heading">Terror Sanctions</div>
      <input className="pt-input" placeholder="Search files..." type="text" />
    </div>
    <div className="pt-navbar-group pt-align-right">
      <button className="pt-button pt-minimal pt-icon-home">Home</button>
      <button className="pt-button pt-minimal pt-icon-document">Files</button>
      <span className="pt-navbar-divider"></span>
      <button className="pt-button pt-minimal pt-icon-user"></button>
      <button className="pt-button pt-minimal pt-icon-notifications"></button>
      <button className="pt-button pt-minimal pt-icon-cog"></button>
    </div>
  </nav>
);

export default DashboardNavbar;