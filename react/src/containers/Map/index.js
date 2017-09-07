import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { retriveAllIndividuals } from '../../actions/individuals';
import { retriveAllTerrorGroups, retrieveAllGeoJsons } from '../../actions/terrorgroups';
import GlobalMap from '../../components/Map';

class Global extends Component {
  constructor(props) {
    super(props);
    this.props.retriveAllIndividuals();
    this.props.retriveAllTerrorGroups();
    this.props.retrieveAllGeoJsons();
  }
  render() {
    const { individuals, terrorgroups, router, geoJson } = this.props;
    return (
      <div>
        <GlobalMap
          individuals={individuals}
          terrorgroups={terrorgroups}
          router={router}
          geoJson={geoJson}
        />
      </div>
    );
  }
}

Global.propTypes = {
  individuals: PropTypes.array.isRequired,  
  retriveAllIndividuals: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  
};

export default connect(
  state => ({
    individuals: state.individuals.individuals,
    terrorgroups: state.terrorgroups.terrorgroups,
    geoJson: state.terrorgroups.geoJson
  }), { retriveAllIndividuals, retriveAllTerrorGroups, retrieveAllGeoJsons },
)(Global);
