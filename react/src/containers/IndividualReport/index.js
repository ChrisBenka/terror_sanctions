import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class IndividualReport extends Component { //eslint-disable-line
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="container">
          <h1>Individual Report will be here</h1>
      </div>
    );
  }
}

IndividualReport.propTypes = {

};

export default connect(
  state => ({
  }), {  },
)(IndividualReport);
