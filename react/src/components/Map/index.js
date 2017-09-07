import React, { Component, PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { fillMarkers, findIndividualId } from '../../helpermethods/map';

class GlobalMap extends Component { //  eslint-disable-line

  static onMouseOver(e) {
    e.layer.openPopup();
  }
  static onMouseOut(e) {
    e.layer.closePopup();
  }
  render() {
    const { individuals, router, terrorgroups } = this.props;
    if (individuals.length > 0 && terrorgroups.length > 0) {
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
};

export default GlobalMap;
