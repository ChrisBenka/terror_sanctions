import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { retriveAllIndividuals } from '../../actions/individuals';
import GlobalMap from '../../components/Map';

class Global extends Component {
  constructor(props) {
    super(props);
    this.props.retriveAllIndividuals();
  }
  render() {
    const { individuals, router } = this.props;
    return (
      <div>
        <GlobalMap
          individuals={individuals}
          router={router}
        />
      </div>
    );
  }
}

Global.propTypes = {
  individuals: PropTypes.array.isRequired,  //eslint-disable-line
  retriveAllIndividuals: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  //eslint-disable-line
};

export default connect(
  state => ({
    individuals: state.individuals.individuals,
  }), { retriveAllIndividuals },
)(Global);
