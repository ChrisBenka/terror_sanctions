import React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';

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
        <MenuItem className="menu-item" text="Individual Reports" iconName="cog" />
      </Menu>
    );
  }
}
export default MenuExample;
