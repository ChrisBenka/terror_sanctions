import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <nav className="navbar navbar-light blue-color-theme">
    <div className="container">
      <div className="navbar-header">
        <img src="src/assets/images/home/logo.png" className="logo pull-left" alt="" />
        <a className="navbar-brand">Terror Sanctions App </a>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav pull-right">
          <li className="active">
            <button type="button" className="btn btn-secondary btn-background align-middle">
              <Link className="router-link" to="/login">
                Login
              </Link>
            </button>
          </li>
          <li className="active">
            <button type="button" className="btn btn-secondary btn-background align-middle">
              <Link className="router-link" to="/signup">
                Sign up
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navbar;
