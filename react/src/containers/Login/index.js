// @flow
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from '../../components/LoginForm';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.props.login(data, this.context.router);
  }

  render() {
    return (
      <div style={{ flex: '1' }}>
        <Navbar />
        <LoginForm onSubmit={this.handleLogin} />
      </div>
    );
  }
}
Login.contextTypes = {
  router: PropTypes.object,
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
};
export default connect(null, { login })(Login);
