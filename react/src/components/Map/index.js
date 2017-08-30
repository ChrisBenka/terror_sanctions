import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import Loader from '../Loader';

const fillMarkers = (individuals) => {
  let markers = [];
  for(let i =0;i<individuals.length;i++){
    markers.push({lat: individuals[i].geo_loc.coordinates[0],
      lng:individuals[i].geo_loc.coordinates[1],
      popup: '<span>' + individuals[i].name +'</span>'});
  }
  return markers;
}

class GlobalMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { individuals } = this.props;
    if(individuals.length>0){
     let markers = fillMarkers(individuals);
    return (
    <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup
        markers={markers}
        wrapperOptions={{enableDefaultStyle: true}}
      />
    </Map>
    );
  }
    return <div> Loading... </div>;
  }
}
export default GlobalMap;


//create list of markers 