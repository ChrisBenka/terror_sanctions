import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReportTextInformation from '../../components/ReportTextInformation';
import {getIndividual} from '../../actions/individuals';
class IndividualReport extends Component { //eslint-disable-line
  constructor(props) {
    super(props);
    this.props.getIndividual(parseInt(
      this.props.params.individualID
    ));
}

  render() {
    const { individual } = this.props;
    if(individual.id){
      console.log(individual);
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
    return <div> Loading... </div>;
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