import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {retriveAllIndividuals} from '../../actions/individuals';
import GlobalMap from "../../components/Map"
class Global extends Component {
  constructor(props) {
    super(props)
    this.props.retriveAllIndividuals();
  }  
  render() {
    const { individuals } = this.props;
    return(
    <div>
      <GlobalMap 
        individuals={ individuals }
      />
    </div>
    );
  }
}

export default connect(
  state => ({
    individuals: state.individuals.individuals,
  }), { retriveAllIndividuals },
)(Global);