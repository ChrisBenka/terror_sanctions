import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';

class AddIndividualForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.onSubmit(data);
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="add-Indiv-form-container">
        <p className="add-Indiv-form-header">Add Individual</p>
        <form className="add-Indiv-form-body white-theme" onSubmit={handleSubmit(this.handleSubmit)}>
          <Field name="name" type="text" component={Input} placeholder="Full Name" />
          <Field name="location" type="text" component={Input} placeholder="Current Location" />
          <Field name="date_of_birth" type="date" component={Input} />
          <Field name="date_of_death" type="date" component={Input} />
          <Field name="place_of_birth" type="text" component={Input} placeholder="Place of Birth" />
          <Field name="report_title" type="text" component={Input} placeholder="Report Title" />
          <Field name="report" type="textarea" component={Input} placeholder="Report" />
          <Field name="sources" type="textarea" component={Input} placeholder="Sources" />
          <Field name="individualnationalities" type="text" component={Input} placeholder="Individual Nationalities" />
          <Field name="individualidentifications" type="text" component={Input} placeholder="Individual Identifications" />
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-block btn-primary"
            suppressContentEditableWarning
          >
            {submitting ? 'Adding Individual...' : 'Add Individual'}
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.location) {
    errors.location = 'Required';
  }
  if (!values.date_of_birth) {
    errors.date_of_birth = 'Required';
  }
  if (!values.place_of_birth) {
    errors.place_of_birth = 'Required';
  }
  if (!values.report_title) {
    errors.report_title = 'Required';
  }
  if (!values.report) {
    errors.report = 'Required';
  }
  if (!values.sources) {
    errors.sources = 'Required';
  }
  if (!values.individualnationalities) {
    errors.individualnationalities = 'Required';
  }
  if (!values.individualidentifications) {
    errors.individualidentifications = 'Required';
  }
  return errors;
};

AddIndividualForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'AddIndividual',
  validate,
})(AddIndividualForm);
