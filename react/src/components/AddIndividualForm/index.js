import React, { Component, PropTypes } from 'react'; //eslint-disable-line
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
          <Field name="fullName" type="text" component={Input} placeholder="Full Name" />
          <Field name="location" type="text" component={Input} placeholder="Current Location" />
          <Field name="dateOfBirth" type="date" component={Input} />
          <Field name="dateOfDeath" type="date" component={Input} />
          <Field name="placeOfBirth" type="text" component={Input} placeholder="Place of Birth" />
          <Field name="reportTitle" type="text" component={Input} placeholder="Report Title" />
          <Field name="report" type="textarea" component={Input} placeholder="Report" />
          <Field name="sources" type="textarea" component={Input} placeholder="Sources" />
          <Field name="individualNationalities" type="text" component={Input} placeholder="Individual Nationalities" />
          <Field name="individualIdentifications" type="text" component={Input} placeholder="Individual Identifications" />
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
  if (!values.fullName) {
    errors.fullName = 'Required';
  }
  if (!values.location) {
    errors.location = 'Required';
  }
  if (!values.dateOfBirth) {
    errors.dateOfBirth = 'Required';
  }
  if (!values.placeOfBirth) {
    errors.placeOfBirth = 'Required';
  }
  if (!values.reportTitle) {
    errors.reportTitle = 'Required';
  }
  if (!values.report) {
    errors.report = 'Required';
  }
  if (!values.sources) {
    errors.sources = 'Required';
  }
  if (!values.individualNationalities) {
    errors.individualNationalities = 'Required';
  }
  if (!values.individualIdentifications) {
    errors.individualIdentifications = 'Required';
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

/*

    field :name, :string
    field :location, :string
    field :date_of_birth, Ecto.Date
    field :date_of_death, Ecto.Date
    field :place_of_birth, :string
    field :report_title, :string
    field :report, :string
    field :sources, :string
    field :geo_loc, Geo.Point
    has_many :individualnationalities, Terror.IndividualNationality
    has_many :individuallanguages, Terror.IndividualLanguage
    has_many :individualidentifications, Terror.IndividualIdentification
    timestamps()
  */
