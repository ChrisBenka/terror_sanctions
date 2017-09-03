import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReportTextInformation from '../../components/ReportTextInformation';
import {getIndividual} from '../../actions/individuals';
class IndividualReport extends Component { //eslint-disable-line
  constructor(props) {
    super(props);
    console.log(this.props.getIndividual(parseInt(
      this.props.params.individualID
    )));
    console.log(this.props);
}

  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col s-6">
                <ReportTextInformation individual={individual} />
            </div>
          </div>
      </div>
    );
  }
}

IndividualReport.propTypes = {

};

export default connect(
  state => ({
    individual: state.individuals.individual,
  }), {getIndividual},
)(IndividualReport);


///so maybe display 1 box which is text info

///another box is timeline of info


/// another box is map of where is at 