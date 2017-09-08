import React, { Component, PropTypes } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { fillMarkers, findIndividualId, buildTerrorGroupCountryHash, filterGeoJsonByTerrorLocations } from '../../helpermethods/map';

const onMouseOver = (e) => {
  e.layer.openPopup();
};
const onMouseOut = (e) => {
  e.layer.closePopup();
};
const getStyle = () => ({
  color: '#006400',
  weight: 5,
  opacity: 0.65,
});

const onClick = (layer) => {
  layer.openPopup();
};

const onEachFeature = (feature, layer) => {
  if (feature.properties && feature.properties.name) {
    layer.bindPopup(feature.properties.terrorgroups.toString());
    layer._popup.setLatLng(feature.geometry.coordinates[0]);  //eslint-disable-line
    layer.on({ click: onClick });
  }
};

class GlobalMap extends Component { //  eslint-disable-line
  render() {
    const { individuals, router, terrorgroups, geoJson } = this.props;
    if (individuals.length > 0 && terrorgroups.length > 0) {
      const hashmapOfTerrorLocations = buildTerrorGroupCountryHash(terrorgroups);
      geoJson.features = filterGeoJsonByTerrorLocations(hashmapOfTerrorLocations, geoJson);
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
              style={getStyle}
              onEachFeature={onEachFeature}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
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
