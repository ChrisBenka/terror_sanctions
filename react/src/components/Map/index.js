import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class GlobalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const { individuals } = this.props
    if(individuals.length>0){
      console.log(individuals[0].geo_loc.coordinates[0])
      const position = [individuals[0].geo_loc.coordinates[0],(individuals[0].geo_loc.coordinates[1] * -1)]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <span>Christopher Benka <br /> Report Link here.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
    return <div> loading... </div>
  }
}
export default GlobalMap;


/*
  Create list of markers 
  render all of htose markerss

*/