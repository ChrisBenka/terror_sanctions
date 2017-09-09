import React, { PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

const Sidebar = (props) => {
  const { router } = props;
  return (
    <Menu className="menu">
      <div>
        <MenuItem className="menu-item men-item pt-icon-person" text="Individuals">
          <MenuItem className=" men-item pt-icon-edit pt-intent " text="Create Individual Report" onClick={() => { router.transitionTo('/create-individual-report'); }} />
          <MenuItem className=" men-item  pt-icon-numbered-list" text="Individual Reports" onClick={() => { router.transitionTo('/individual-reports'); }} />
        </MenuItem>
      </div>
      <div>
        <MenuItem className="menu-item pt-icon-globe" text="Global Map" onClick={() => { router.transitionTo('/'); }} />
      </div>
      <div>
        <MenuItem className="menu-item pt-icon-people" text="Terror Groups">
          <MenuItem className=" men-item pt-icon-edit " text="Create Terror Group Report" onClick={() => { router.transitionTo('/create-terror-group-report'); }} />
          <MenuItem className=" men-item pt-icon-edit " text="Terror Group Reports" onClick={() => { router.transitionTo('/terror-group-reports'); }} />
        </MenuItem>
      </div>
    </Menu>
  );
};


Sidebar.propTypes = {
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

export default Sidebar;
