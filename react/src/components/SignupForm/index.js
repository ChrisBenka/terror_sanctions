import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';


const SignupForm = () => (
  <div className="signup-form-container">
    <form className="signup-form">
      <p className="signup-header">Sign up</p>
      <div className="input-group sign-up-form-input-group">
        <Field
          name="email"
          type="email"
          component={Input}
          placeholder="Email"
          aria-describedby="basic-addon1"
        />
        <span className="input-group-addon glyphicon glyphicon-envelope" id="basic-addon1" />
      </div>
      <div className="input-group sign-up-form-input-group">
        <Field
          name="firstName"
          type="text"
          component={Input}
          placeholder="First Name"
        />
        <span className="input-group-addon glyphicon glyphicon-user" id="basic-addon1" />
      </div>
      <div className="input-group sign-up-form-input-group">
        <Field
          name="lastName"
          type="text"
          component={Input}
          placeholder="Last Name"
        />
        <span className="input-group-addon glyphicon glyphicon-user" id="basic-addon1" />
      </div>
      <div className="input-group sign-up-form-input-group">
        <Field
          name="password"
          type="password"
          component={Input}
          placeholder="password"
        />
        <span className="input-group-addon glyphicon glyphicon-lock" id="basic-addon1" />
      </div>
      <div className="input-group sign-up-form-input-group">
        <Field
          name="confirmPassword"
          type="password"
          component={Input}
          placeholder="confirm password"
        />
        <span className="input-group-addon glyphicon glyphicon-lock" id="basic-addon1" />
      </div>
      <p className="sign-up-form-input-group">
        By clicking Sign Up or continue I agree to the Terms of Service
      </p>
      <button type="submit" className="btn btn-block btn-primary sign-up-btn"> Sign up </button>
    </form>
  </div>
);

const validateEmail = (email) => {
  const regexExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regexExpression.test(email);
};
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (values.email) {
    errors.email = '';
  } if (!validateEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName) {
    errors.firstName = '';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName) {
    errors.lastName = '';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password !== values.confirmPassword) {
    errors.password = 'Passwords must match';
    errors.confirmPassword = 'Passwords must match';
  }

  return errors;
};

export default reduxForm({
  form: 'signup',
  validate,
})(SignupForm);

