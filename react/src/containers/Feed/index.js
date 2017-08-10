import React, { Component } from 'react';
import ReportPreview from '../../components/ReportPreview';
class Feed extends Component {
  constructor(props) {
    super(props);
  }
  beautify(path){
    path = path.replace(/-/g,' ').replace('/','');
    return this.capatilizeFirstLetters(path);
  }
  capatilizeFirstLetters(path){
     return path.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
  render () {
    const { location }  = this.props; 
    console.log(location);
    return (
      <div className="container">
        <h1 className="text-center">{this.beautify(location.pathname)}</h1>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
        <ReportPreview></ReportPreview>
      </div>
    );
  }
}
export default Feed;
