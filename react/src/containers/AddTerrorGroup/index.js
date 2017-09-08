import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTerrorGroup } from '../../actions/terrorgroups';
import AddTerrorGroupForm from '../../components/AddTerrorGroupForm';

class AddTerrorGroup extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.addTerrorGroup(data);
  }

  render() {
    return (
      <div className="light-grey-theme">
        <div className="container">
          <AddTerrorGroupForm onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

AddTerrorGroup.propTypes = {
  addTerrorGroup: PropTypes.func.isRequired,
};

export default connect(
  (null), { addTerrorGroup },
)(AddTerrorGroup);
