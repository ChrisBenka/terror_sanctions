import React, { PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

class MenuExample extends React.Component { //eslint-disable-line
  render() {
    const { router } = this.props;
    return (
      <Menu className="menu">
        <div>
          <MenuItem className="menu-item pt-icon-person" text="Individuals">
            <MenuItem className=" pt-icon-edit " text="Create Individual" onClick={() => { router.transitionTo('/create-individual-report'); }} />
            <MenuItem className=" pt-icon-numbered-list" text="Individual Reports" onClick={() => { router.transitionTo('/individual-reports'); }} />
          </MenuItem>
        </div>
        <div>
          <MenuItem className="menu-item pt-icon-globe" text="Global Map" onClick={() => { router.transitionTo('/'); }} />
        </div>
        <div>
          <MenuItem className="menu-item pt-icon-people" text="Terror Group Reports" onClick={() => { router.transitionTo('/terror-group-reports'); }} />
        </div>
      </Menu>
    );
  }
}

MenuExample.propTypes = {
  router: PropTypes.object.isRequired, //eslint-disable-line
};
export default MenuExample;
