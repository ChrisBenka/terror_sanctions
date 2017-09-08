import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';

class AddTerrorGroupForm extends Component {
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
        <p className="add-Indiv-form-header">Add Terror Group</p>
        <form className="add-Indiv-form-body white-theme" onSubmit={handleSubmit(this.handleSubmit)}>
          <Field name="name" type="text" component={Input} placeholder="Name of Terror Group" />
          <Field name="place_of_origin" type="text" component={Input} placeholder="Place of Origin" />
          <Field name="date_of_origin" type="date" component={Input} />
          <Field name="mission" type="text" component={Input} placeholder="Terror Group's mission" />
          <Field name="report_title" type="text" component={Input} placeholder="Report Title" />
          <Field name="report" type="textarea" component={Input} placeholder="Report" />
          <Field name="sources" type="textarea" component={Input} placeholder="Sources" />
          <Field name="locations" type="text" component={Input} placeholder="Country Operating Locations" />
          <Field name="methodsoffinance" type="text" component={Input} placeholder="Methods of finance" />
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-block btn-primary"
            suppressContentEditableWarning
          >
            {submitting ? 'Adding Terror Group...' : 'Add Terror Group'}
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
  if (!values.place_of_origin) {
    errors.place_of_origin = 'Required';
  }
  if (!values.date_of_origin) {
    errors.date_of_origin = 'Required';
  }
  if (!values.mission) {
    errors.mission = 'Required';
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
  if (!values.locations) {
    errors.locations = 'Required';
  }
  if (!values.methodsoffinance) {
    errors.methodsoffinance = 'Required';
  }
  return errors;
};

AddTerrorGroupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'AddTerrorGroupForm',
  validate,
})(AddTerrorGroupForm);
