import React, { Component } from 'react';
import {textarea, input} from '@blueprintjs/core';
import Input from '../Input';

const beautifyNationalities = (nationalities) => {
   nationalities = nationalities.reduce(function(previousValue,element){
    return previousValue +',' + element.nationality
  },"")
  return nationalities.substring(1);
}

const beautifyIdentifications = (identifications) => {
  console.log(identifications);
  identifications = identifications.reduce(function(previousValue,element){
    return previousValue + ';' + element.type + ',' + element.nation + ',' + element.identification 
  },"")
  return identifications.substring(1);
}

const ReportTextInformation = (props) => (
    <form className="container">
        <label className="pt-label">
            Full Name
            <input className="pt-input pt-fill readOnly" readOnly value={props.individual.name} dir="auto"/>
        </label>
        <label className="pt-label">
          Date Of Birth
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-calendar"></span>
            <input className="pt-input  readOnly" readOnly type="text" value={props.individual.date_of_birth} />
          </div>
        </label>
        <label className="pt-label">
            Location
            <input className="pt-input pt-fill" readOnly value={props.individual.location} dir="auto"/>
        </label>
        <label className="pt-label">
            Place of birth
            <input className="pt-input pt-fill" readOnly value={props.individual.place_of_birth} dir="auto"/>
        </label>
        <label className="pt-label">
            nationalities
            <input className="pt-input pt-fill readOnly " readOnly value={beautifyNationalities(props.individual.nationalities)} />
        </label>
        <label className="pt-label">
            nationalities
            <input className="pt-input pt-fill readOnly" readOnly value={beautifyIdentifications(props.individual.identifications)} />
        </label>
        <label className="pt-label">
          Report
          <textarea className="pt-input pt-fill readOnly" readOnly dir="auto" value={props.individual.report} />
        </label>
        <label className="pt-label">
          Sources
          <textarea className="pt-input pt-fill" readOnly dir="auto" value={props.individual.sources} />
        </label>
    </form>
);

export default ReportTextInformation;