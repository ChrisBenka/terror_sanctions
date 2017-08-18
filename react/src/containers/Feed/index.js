import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { retriveAllIndividuals } from '../../actions/individuals';

const capatilizeFirstLetters = (path) => {
  return path.replace(/\w\S*/g, txt => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

const beautify = (path) => {
  const pageTitle = path.replace(/-/g, ' ').replace('/', '');
  return capatilizeFirstLetters(pageTitle);
};

const columns = [{
  Header:'Name',
  accessor:'name',
},
{
  Header:'Date of Birth',
  accessor:'date_of_birth'
},
{
  Header: 'Location',
  accessor:'location',
}
];

class Feed extends Component { //eslint-disable-line
  constructor(props){
    super(props);
    this.props.retriveAllIndividuals();
  }

  render() {
    const { location, individualReports } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">{beautify(location.pathname)}</h1>
        <ReactTable
          data={individualReports}
          columns={columns}
          showPageSizeOptions={false}
          defaultPageSize={15}
        />
      </div>
    );
  }
}

Feed.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
  individualReports: PropTypes.array.isRequired,
};

export default connect(
  state => ({
    individualReports: state.individuals.individuals,
  }), { retriveAllIndividuals },
)(Feed);
