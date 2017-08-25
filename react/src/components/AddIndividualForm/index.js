import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';

class AddIndividualForm extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="add-Indiv-form-container">
        <p className="add-Indiv-form-header">Add Individual</p>
        <form className="add-Indiv-form-body white-theme">
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

        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'AddIndividual',

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