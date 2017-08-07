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
          name="first-name"
          type="text"
          component={Input}
          placeholder="First Name"
        />
        <span className="input-group-addon glyphicon glyphicon-user" id="basic-addon1" />
      </div>
      <div className="input-group sign-up-form-input-group">
        <Field
          name="last-name"
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
          name="confirm-password"
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
export default reduxForm({
  form: 'signup',
})(SignupForm);

