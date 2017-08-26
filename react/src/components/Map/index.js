import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class GlobalMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
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
}
export default GlobalMap;
