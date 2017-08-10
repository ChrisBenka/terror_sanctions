import React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import { Link } from 'react-router';

class MenuExample extends React.Component {
  render() {
    return (
      <Menu className="menu">
        <MenuItem
          className="menu-item"
          iconName="new-text-box"
          onClick={this.handleClick}
          text="New text box"
        />
        <MenuItem
          className="menu-item"
          iconName="new-object"
          onClick={this.handleClick}
          text="New object"
        />
        <MenuItem
          className="menu-item"
          iconName="new-link"
          onClick={this.handleClick}
          text="New link"
        />
        <MenuDivider />
        <Link to='/individual-reports'>
          <div>
            <MenuItem className="menu-item" text="Individual Reports" iconName="cog" />
          </div>
        </Link>
        <Link to='/terror-group-reports'>
          <div>
            <MenuItem className="menu-item" text="Terror Group Reports" iconName="cog" />
          </div>
        </Link>
      </Menu>
    );
  }
}
export default MenuExample;
