// @flow
import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  alert: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0',
    left: '25%',
    marginTop: '75px',
    right: '25%',
    zIndex: '2',
    padding: '10px 20px',
    color: '#fff',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '300',
    background: '#cc5454',
    boxShadow: '0 1px 1px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35)',
    borderBottomRightRadius: '4px',
    borderBottomLeftRadius: '4px',
  },

  close: {
    color: '#fff',
    background: 'transparent',
    cursor: 'pointer',
    border: '0',
    fontSize: '20px',
    width: '30px',
  },
});

class Alert extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    if (this.props.timeout) {
      setTimeout(this.props.onClose, this.props.timeout);
    }
  }

  render() {
    return (
      <div className={css(styles.alert)}>
        <div style={{ width: '30px' }} />
        <div style={{ flexGrow: 1 }}>{this.props.message}</div>
        <button onClick={this.props.onClose} className={css(styles.close)}>&times;</button>
      </div>
    );
  }
}
Alert.propTypes = {
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number,  
  onClose: PropTypes.func.isRequired,
};

export default Alert;
