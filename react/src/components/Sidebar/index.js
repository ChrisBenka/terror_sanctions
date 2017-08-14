import React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import { Link } from 'react-router';

class MenuExample extends React.Component {
  render() {
    return (
      <Menu className="menu">
        <Link to="/individual-reports">
          <div>
            <MenuItem className="menu-item" text="Individual Reports" iconName="cog" />
          </div>
        </Link>
        <Link to="/terror-group-reports">
          <div>
            <MenuItem className="menu-item" text="Terror Group Reports" iconName="cog" />
          </div>
        </Link>
      </Menu>
    );
  }
}
export default MenuExample;
