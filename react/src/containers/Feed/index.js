import React, { Component, PropTypes } from 'react';
import ReportPreview from '../../components/ReportPreview';

const capatilizeFirstLetters = (path) => {
  return path.replace(/\w\S*/g, txt => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

const beautify = (path) => {
  const pageTitle = path.replace(/-/g, ' ').replace('/', '');
  return capatilizeFirstLetters(pageTitle);
};

class Feed extends Component { //eslint-disable-line
  render() {
    const { location } = this.props;
    return (
      <div className="container">
        <h1 className="text-center">{beautify(location.pathname)}</h1>
        <ReportPreview />
        <ReportPreview />
        <ReportPreview />
        <ReportPreview />
      </div>
    );
  }
}

Feed.propTypes = {
  location: PropTypes.object.isRequired, //eslint-disable-line
};

export default Feed;
