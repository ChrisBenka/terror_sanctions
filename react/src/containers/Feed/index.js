import React, { Component, PropTypes } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const capatilizeFirstLetters = (path) => {
  return path.replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

const beautify = (path) => {
  const pageTitle = path.replace(/-/g, ' ').replace('/', '');
  return capatilizeFirstLetters(pageTitle);
};

const data = [];
const columns = [];

class Feed extends Component { //eslint-disable-line
  render() {
    const { location } = this.props;
    return (
      <div className="container">
        <h1 className="text-center">{beautify(location.pathname)}</h1>
        <ReactTable
          data={data}
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
};

export default Feed;
