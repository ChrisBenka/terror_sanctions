import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { retriveAllIndividuals } from '../../actions/individuals';
import { retriveAllTerrorGroups } from '../../actions/terrorgroups';

const capatilizeFirstLetters = (path) => {  // eslint-disable-line
  return path.replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); // eslint-disable-line
};

const beautify = (path) => {
  const pageTitle = path.replace(/-/g, ' ').replace('/', '');
  return capatilizeFirstLetters(pageTitle);
};

const columns = [{
  Header: 'Name',
  accessor: 'name',
},
{
  Header: 'Date of Birth',
  accessor: 'date_of_birth',
},
{
  Header: 'Location',
  accessor: 'location',
},
];

class Feed extends Component {
  constructor(props) {
    super(props);
    this.props.retriveAllIndividuals();
  }

  render() {
    const { location, individualReports, router } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">{beautify(location.pathname)}</h1>
        <ReactTable
          data={individualReports}
          columns={columns}
          showPageSizeOptions={false}
          defaultPageSize={15}
          getTdProps={(state, rowInfo) => ({
            onClick: (e, handleOriginal) => {
              router.transitionTo(`/individual-report/${rowInfo.original.name.replace(/\s/g, '')}/${rowInfo.original.id}`);
              if (handleOriginal) {
                handleOriginal();
              }
            },
          })
          }
        />
      </div>
    );
  }
}

Feed.propTypes = {
  location: PropTypes.object.isRequired,  //  eslint-disable-line
  individualReports: PropTypes.array.isRequired,  //  eslint-disable-line
  retriveAllIndividuals: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  //  eslint-disable-line
};


const mapStateToProps = (state,ownProps) => {
  switch (ownProps.reporType) {
    case "individual" :
      return {
        ...state,
        reports: state.individuals.individuals,
    }
    case "terrorgroup": 
      return {
        ...state,
        reports: state.terrorgroups.terrorgroups,
    }
  }
}

const mapActionsToProps = (dispatch) => {
  console.log(dispatch)
}

const mergeProps = (state,actions,ownProps) => {
  console.log(state);
  console.log(actions);
  console.log(ownProps);
}




export default connect(mapStateToProps, mapActionsToProps,mergeProps)(Feed);
