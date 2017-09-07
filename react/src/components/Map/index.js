import React, { Component, PropTypes } from 'react';
import { Map, TileLayer, getGEOJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { fillMarkers, findIndividualId, } from '../../helpermethods/map';
import $ from 'jquery';

class GlobalMap extends Component { //  eslint-disable-line
  
  getStyle(feature, layer) {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
  }
  
   onMouseOver(e){
    e.layer.openPopup()
  }
  onMouseOut(e){
    console.log(e.layer)
    e.layer.closePopup()
  }
  
   onEachFeature(feature, layer) {
     if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
        layer._popup.setLatLng([38.792341,33.378686]);
        console.log(layer._popup);
    }
  }

  render() {
    const { individuals, router, terrorgroups, geoJson } = this.props;
    if (individuals.length > 0 && terrorgroups.length>0 && geoJson.length>0) {
      console.log(geoJson)
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

const getStyle = (feature, layer) => {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
}



GlobalMap.propTypes = {
  individuals: PropTypes.array.isRequired, //eslint-disable-line  
  router: PropTypes.object.isRequired, //eslint-disable-line
  geoJSON:PropTypes.array.isRequired,
};
export default GlobalMap;
