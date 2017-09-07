import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addIndividual } from '../../actions/individuals';
import AddIndividualForm from '../../components/AddIndividualForm';

class AddIndividual extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.addIndividual(data);
  }
  render() {
    return (
      <div className="light-grey-theme">
        <div className="container">
          <AddIndividualForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

AddIndividual.propTypes = {
  addIndividual: PropTypes.func.isRequired,
};

export default connect(
  state => ({ 
  }), { addIndividual },
)(AddIndividual);
