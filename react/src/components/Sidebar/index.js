import React, { PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

const Sidebar = (props) => {
  const { router } = props;
  return (
    <Menu className="menu">
      <h4 className="font-grey">Search</h4>
      <div className="pt-input-group .pt-large search-all">
        <input className="pt-input" pt-large type="search" placeholder="Search" dir="auto" />
        <span className="pt-icon pt-icon-search"></span>
      </div>
    </Menu>
  );
};


Sidebar.propTypes = {
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

export default Sidebar;
