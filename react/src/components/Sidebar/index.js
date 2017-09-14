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
    const { handleSubmit, router } = this.props;
   
   return (
     <form className="menu" onSubmit={handleSubmit(this.handleSubmit)}>
        <h4 className="font-grey">Search</h4>
          <div className="pt-input-group .pt-large search-all">
            <Field
              name="query"
              type="search"
              component={Input}
              className="pt-icon-search"
            />
            <span className="pt-icon pt-icon-search"></span>
          </div>
     </form>
      
   )
  } 
}

const validate = (values) => {
  const errors = {};
  if (!values.query) {
    errors.query = 'Required';
  }
  return errors;
};


SearchMenu.propTypes = {
  router: PropTypes.object.isRequired,  //  eslint-disable-line
  onSubmit: PropTypes.func.isRequired,

};
   
export default reduxForm({
  form:'search',
  validate,
})(SearchMenu);   
