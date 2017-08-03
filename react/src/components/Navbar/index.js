// @flow
import React from 'react';
const Navbar = () =>
  <nav className="pt-navbar pt-dark modifier">
  <div className="pt-navbar-group pt-align-left">
    <div className="pt-navbar-heading">Blueprint</div>
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

export default Navbar;