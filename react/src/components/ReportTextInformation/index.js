import React, { Component } from 'react';
import {textarea, input} from '@blueprintjs/core';
import Input from '../Input';
const ReportTextInformation = (props) => (
    <form className="container">
        <label className="pt-label">
            Full Name
            <input className="pt-input readOnly" readOnly value={props.individual.name} dir="auto"/>
        </label>
    </form>
);

export default ReportTextInformation;