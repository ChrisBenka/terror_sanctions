import React, { Component, PropTypes } from 'react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';


class SearchMenu extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(data) {
    this.props.onSubmit(data);
  }
  render() {
    const { router } = this.props;
    return(
    <Menu className="menu">
      <h4 className="font-grey">Search</h4>
      <div className="pt-input-group .pt-large search-all">
        <Field
          name="query"
          type="search"
          component={Input}
          placeholder="Search"
          className="pt-input"
        />
        <span className="pt-icon pt-icon-search"></span>
      </div>
    </Menu>
    )
  }
}

SearchMenu.propTypes = {
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

const validate = (values) => {
  const errors = {};
  if (!values.query) {
    errors.query = 'Required';
  }
  return errors;
};




export default reduxForm({
  form: 'search',
  validate,
})(SearchMenu);
