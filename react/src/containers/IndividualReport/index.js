import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReportTextInformation from '../../components/ReportTextInformation';
import { getIndividual } from '../../actions/individuals';

class IndividualReport extends Component { 
  constructor(props) {
    super(props);
    this.props.getIndividual(parseInt(  
      this.props.params.individualID,
    ));
  }
  render() {
    const { individual } = this.props;
    if (individual.id) {
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
  individual: PropTypes.object.isRequired,  
  getIndividual: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,  
};

export default connect(
  state => ({
    individual: state.individuals.individual,
  }), { getIndividual },
)(IndividualReport);
