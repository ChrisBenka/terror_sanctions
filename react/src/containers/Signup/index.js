import React from 'react';
import Navbar from '../../components/Navbar';
import SignupForm from '../../components/SignupForm';

const Signup = () => (
  <div className="sign-up-page">
    <Navbar />
    <div>
      <SignupForm />
    </div>
  </div>
);

export default Signup;
