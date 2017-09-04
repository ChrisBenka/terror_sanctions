import React, { PropTypes } from 'react';
import { textarea, input } from '@blueprintjs/core';

const beautifyNationalities = (nationalities) => {
  const beautifiedNationalities = nationalities.reduce((previousValue, element) => {  //eslint-disable-line
    return `${previousValue}','${element.nationality}`;
  }, '');
  return beautifiedNationalities.substring(1);
};

const beautifyIdentifications = (identifications) => {
  const beautifiedIdentifications = identifications.reduce((previousValue, element) => {  //eslint-disable-line
    return `${previousValue};${element.type},${element.nation},${element.identification}`;
  }, '');
  return beautifiedIdentifications.substring(1);
};

const ReportTextInformation = props => (
  <div className="container">
    <label htmlFor="name" className="pt-label">
      Full Name
      <input id="name" className="pt-input pt-fill readOnly" readOnly value={props.individual.name} dir="auto" />
    </label>
    <label htmlFor="dob" className="pt-label">
      Date Of Birth
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-calendar" />
        <input id="dob" className="pt-input  readOnly" readOnly type="text" value={props.individual.date_of_birth} />
      </div>
    </label>
    <label htmlFor="location" className="pt-label">
      Location
      <input id="location" className="pt-input pt-fill" readOnly value={props.individual.location} dir="auto" />
    </label>
    <label htmlFor="place_of_birth" className="pt-label">
      Place of birth
      <input id="place_of_birth" className="pt-input pt-fill" readOnly value={props.individual.place_of_birth} dir="auto" />
    </label>
    <label htmlFor="nationalities" className="pt-label">
      nationalities
      <input id="nationalities" className="pt-input pt-fill readOnly " readOnly value={beautifyNationalities(props.individual.nationalities)} />
    </label>
    <label htmlFor="identifications" className="pt-label">
      identifications
      <input id="identifications" className="pt-input pt-fill readOnly" readOnly value={beautifyIdentifications(props.individual.identifications)} />
    </label>
    <label htmlFor="report" className="pt-label">
      Report
      <textarea id="report" className="pt-input pt-fill readOnly" readOnly dir="auto" value={props.individual.report} />
    </label>
    <label htmlFor="sources" className="pt-label">
      Sources
      <textarea id="sources" className="pt-input pt-fill" readOnly dir="auto" value={props.individual.sources} />
    </label>
  </div>
);

export default ReportTextInformation;

ReportTextInformation.propTypes = {
  individual: PropTypes.object.isRequired //  eslint-disable-line
};
