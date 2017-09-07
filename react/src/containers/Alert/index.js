import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hideAlert } from '../../actions/alert';
import Alert from '../../components/Alert';

class AlertContainer extends Component {
  constructor(props) {
    super(props);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { visible, pathname } = this.props;
    if (visible && pathname !== nextProps.pathname) {
      this.props.hideAlert();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.visible !== this.props.visible) return true;
    return false;
  }


  handleClose() {
    this.props.hideAlert();
  }

  render() {
    const { visible, timeout, message } = this.props;

    return visible
      ? <Alert
        message={message}
        timeout={timeout}
        onClose={this.handleClose}
      />
      : null;
  }
}

AlertContainer.propTypes = {
  pathname: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  timeout: PropTypes.number,
  message: PropTypes.string.isRequired,
  hideAlert: PropTypes.func.isRequired,
};

AlertContainer.defaultProps = {
  timeout: 1000,
};

export default connect(
  state => ({
    message: state.alert.message,
    visible: state.alert.visible,
    timeout: state.alert.timeout,
  }),
  { hideAlert },
)(AlertContainer);
