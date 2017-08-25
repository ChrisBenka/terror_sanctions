import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddIndividualForm from '../../components/AddIndividualForm';

class AddIndividual extends Component { //eslint-disable-line
  render() {
    return (
      <div className="light-grey-theme">
        <div className="container">
          <AddIndividualForm />
        </div>
      </div>
      );
  }
}

//name,loc,dob,dod,place of birth,report title, report, srouces, 
//individual langauges individual identifications
//.ighter grey 

export default connect(
  state => ({
  }), {  },
)(AddIndividual);
