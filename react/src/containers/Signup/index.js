// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupForm from '../../components/SignupForm';
import Navbar from '../../components/Navbar';

type Props = {
  signup: () => void,
}

class Signup extends Component {
  constructor(props) {
    console.log("in cosntructor")
    console.log(props)
    super(props);
    this.handleSignup = this.handleSignup.bind(this)
  };
  handleSignup(data){
    console.log('in handle sign up')
    console.log(data)
    console.log(this.context.router)
    this.props.signup(data, this.context.router)
  };

  render() {
    return (
      <div style={{ flex: '1' }}>
        <Navbar />
        <SignupForm onSubmit={this.handleSignup} />
      </div>
    );
  }
}
Signup.contextTypes = {
    router: PropTypes.object,
  }

export default connect(null, { signup })(Signup);