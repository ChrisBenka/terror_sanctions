import React, { PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';

const Histogram = (props) => {
  const { router } = props;
  return (
    <div className="menu">
      <p> Please select an entity to begin </p>
    </div>
  );
};


Histogram.propTypes = {
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

export default Histogram;
