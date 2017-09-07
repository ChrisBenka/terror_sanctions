import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { retriveAllIndividuals } from '../../actions/individuals';
import { retriveAllTerrorGroups } from '../../actions/terrorgroups';
import GlobalMap from '../../components/Map';

class Global extends Component {
  constructor(props) {
    super(props);
    this.props.retriveAllIndividuals();
    this.props.retriveAllTerrorGroups();
  }
  render() {
    const { individuals, terrorgroups, router } = this.props;
    return (
      <div>
        <GlobalMap
          individuals={individuals}
          terrorgroups={terrorgroups}
          router={router}
        />
      </div>
    );
  }
}

Global.propTypes = {
  individuals: PropTypes.array.isRequired,  //eslint-disable-line
  terrorgroups: PropTypes.array.isRequired, //eslint-disable-line
  retriveAllIndividuals: PropTypes.func.isRequired,
  retriveAllTerrorGroups: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};

export default connect(
  state => ({
    individuals: state.individuals.individuals,
    terrorgroups: state.terrorgroups.terrorgroups,
  }), { retriveAllIndividuals, retriveAllTerrorGroups },
)(Global);
