import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { search } from '../../actions/searchmenu';
import Sidebar from '../../components/Sidebar';

class SearchMenu extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(data) {
    this.props.search(data);
  }
  render() {
    const { router, onSubmit } = this.props;
    return (
        <Sidebar router={router} onSubmit={this.handleSignup} />
    );
  }
}

SearchMenu.propTypes = {
  search: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

const mergeProps = (state, actions, ownProps) => ({
  ...state,
  ...actions,
  ...ownProps,
});

export default connect(null, { search }, mergeProps)(SearchMenu);
