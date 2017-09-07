import React, { Component, PropTypes } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { fillMarkers, findIndividualId, buildTerrorGroupCountryHash } from '../../helpermethods/map';

class GlobalMap extends Component { //  eslint-disable-line

  static onMouseOver(e) {
    e.layer.openPopup();
  }
  static onMouseOut(e) {
    e.layer.closePopup();
  }
  static getStyle() {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65,
    };
  }

  static onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.terrorgroups.toString());
      layer._popup.setLatLng(feature.geometry.coordinates[0]);  //eslint-disable-line
    }
  }
  render() {
    const { individuals, router, terrorgroups, geoJson } = this.props;
    if (individuals.length > 0 && terrorgroups.length > 0) {
      const hashmapOfTerrorLocations = buildTerrorGroupCountryHash(terrorgroups);
      geoJson.features = geoJson.features.filter((feature) => { //eslint-disable-line
        if (Object.keys(hashmapOfTerrorLocations).includes(feature.properties.name)) {
          feature.properties.terrorgroups = []; //  eslint-disable-line
          feature.properties.terrorgroups = hashmapOfTerrorLocations[feature.properties.name]; //eslint-disable-line
          return feature;
        }
      });

      const markers = fillMarkers(individuals);
      return (
        <div>
          <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
            <TileLayer
              url="https://api.mapbox.com/styles/v1/dukebfreak/cj1la2yzi00062rmor3p7ydix/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZHVrZWJmcmVhayIsImEiOiJjajFsOXU1MXkwMDBvMzJrYXgyOHBwNGJ3In0.tu-LO7XEDkMUUMf3kE1MHA"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <MarkerClusterGroup
              markers={markers}
              wrapperOptions={{ enableDefaultStyle: true }}
              onMarkerClick={(marker) => {
                const { individaulID, individaulName } = findIndividualId(marker);
                router.transitionTo(`/individual-report/${individaulName}/${individaulID}`);
              }}
            />
            <GeoJSON
              data={geoJson}
              style={this.getStyle}
              onEachFeature={this.onEachFeature}
              onMouseOver={this.onMouseOver}
              onMouseOut={this.onMouseOut}
            />
          </Map>
        </div>
      );
    }
    return <div> Loading... </div>;
  }
}


GlobalMap.propTypes = {
  individuals: PropTypes.array.isRequired, //eslint-disable-line  
  router: PropTypes.object.isRequired, //eslint-disable-line
  terrorgroups: PropTypes.array.isRequired, //  eslint-disable-line
  geoJson: PropTypes.object.isRequired, //eslint-disable-line
};

export default GlobalMap;
