import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupForm from '../../components/SignupForm';
import Navbar from '../../components/Navbar';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }
  handleSignup(data) {
    this.props.signup(data, this.props.router);
  }
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
};
Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

const mergeProps = (state, actions, ownProps) => ({
  ...state,
  ...actions,
  ...ownProps,
});

export default connect(null, { signup }, mergeProps)(Signup);
