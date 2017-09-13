import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { retriveAllIndividuals } from '../../actions/individuals';
import { retriveAllTerrorGroups } from '../../actions/terrorgroups';
import { retireveAllSanctionBodies } from '../../actions/sanctionbodies';

const capatilizeFirstLetters = (path) => {  // eslint-disable-line
  return path.replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); }); // eslint-disable-line
};

const beautify = (path) => {
  const pageTitle = path.replace(/-/g, ' ').replace('/', '');
  return capatilizeFirstLetters(pageTitle);
};

class Feed extends Component {
  constructor(props) {
    super(props);
    this.props.retrieveFeedData();
  }

  render() {
    const { location, reports, router, reportType, columns } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">{beautify(location.pathname)}</h1>
        <ReactTable
          data={reports}
          columns={columns}
          showPageSizeOptions={false}
          defaultPageSize={15}
          getTdProps={(state, rowInfo) => ({
            onClick: (e, handleOriginal) => {
              router.transitionTo(`/${reportType}/${rowInfo.original.name.replace(/\s/g, '')}/${rowInfo.original.id}`);
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
  reports: PropTypes.array.isRequired,  //  eslint-disable-line
  retrieveFeedData: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,  //  eslint-disable-line
  reportType: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired, //eslint-disable-line
};


const mapStateToProps = (state, ownProps) => {
  switch (ownProps.pathname) {
    case '/individual-reports':
      return {
        ...state,
        reports: state.individuals.individuals,
      };
    case '/terror-group-reports':
      return {
        ...state,
        reports: state.terrorgroups.terrorgroups,
      };
    default:
      return {
        ...state,
      };
  }
};

const mapActionsToProps = (dispatch, ownProps) => {
  switch (ownProps.pathname) {
    case '/individual-reports':
      return {
        ...ownProps,
        retrieveFeedData: retriveAllIndividuals,
      };
    case '/terror-group-reports':
      return {
        ...ownProps,
        retrieveFeedData: retriveAllTerrorGroups,
      };
    case '/list-of-sanction-bodies':
      return {
        ...ownProps,
        retrieveFeedData: retireveAllSanctionBodies,
      }
    default:
      return {
        ...ownProps,
      };
  }
};

const mergeProps = (state, actions, ownProps) => {
  switch (ownProps.pathname) {
    case '/individual-reports' :
      return {
        ...ownProps,
        ...state,
        ...actions,
        reportType: 'individual-report',
        columns: [{ Header: 'Name', accessor: 'name' }, { Header: 'Report', accessor: 'report' }],
      };
    case '/terror-group-reports':
      return {
        ...ownProps,
        ...state,
        ...actions,
        reportType: 'terror-group-report',
        columns: [{ Header: 'Name', accessor: 'name' }, { Header: 'Year of Origin', accessor: 'year_of_origin' }],
      };
    case '/list-of-sanction-bodies': 
      return {
       ...ownProps,
        ...state,
        ...actions,
        reportType: 'sanction-body-report',
        columns: [{ Header: 'Name', accessor: 'name' }, { Header: 'Location', accessor: 'location' }, { Header: 'Mandate', accessor: 'directive' }],
      };
    default:
      return {
        ...ownProps,
        ...state,
        ...actions,
      };
  }
};

export default connect(mapStateToProps, mapActionsToProps, mergeProps)(Feed);
