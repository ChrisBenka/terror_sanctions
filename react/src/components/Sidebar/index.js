import React from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { Link } from 'react-router';

class MenuExample extends React.Component { //eslint-disable-line
  render() {
    return (
      <Menu className="menu">
        <Link to="/individual-reports">
          <div>
            <MenuItem className="menu-item pt-icon-person" text="Individual Reports" />
          </div>
        </Link>
        <Link to="/">
          <div>
            <MenuItem className="menu-item pt-icon-globe" text="Global Map" />
          </div>
        </Link>
        <Link to="/terror-group-reports">
          <div>
            <MenuItem className="menu-item pt-icon-people" text="Terror Group Reports" />
          </div>
        </Link>
      </Menu>
    );
  }
}
export default MenuExample;
