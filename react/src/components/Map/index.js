import React, { Component, PropTypes } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import $ from 'jquery';

const fillMarkers = (individuals) => {
  const markers = [];
  for (let i = 0; i < individuals.length; i += 1) {
    markers.push({ lat: individuals[i].geo_loc.coordinates[0],
      lng: individuals[i].geo_loc.coordinates[1],
      popup: `<p style='display:none'>${individuals[i].id}</p>${individuals[i].name}` });
  }
  return markers;
};

const findIndividualId = (marker) => {
  const individualPopupHtml = (marker._popup._content); //  eslint-disable-line
  let individaulName = $.parseHTML(individualPopupHtml)[1].data;
  individaulName = individaulName.replace(/\s/g, '');
  const individaulID = $.parseHTML(individualPopupHtml)[0].innerHTML;
  return { individaulID, individaulName };
};

class GlobalMap extends Component { //  eslint-disable-line
  
  getStyle(feature, layer) {
    return {
      color: '#006400',
      weight: 5,
      opacity: 0.65
    }
  }
  
   onMouseOver(e,layer){
    console.log('onMouseOver',e)
  }
  
   onEachFeature(feature, layer) {
     if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
  }

  render() {
    const { individuals, router } = this.props;
    if (individuals.length > 0) {
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
              onMouseOver={this.onMouseOver}
            />
            <GeoJSON 
              data={getGeoJson} 
              style={getStyle} 
              onMouseOver={this.onMouseOver}
              onEachFeature={this.onEachFeature}
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


const getGeoJson = {
  "type": "FeatureCollection",
  "features": [

    {
      "type":"Feature",
      "id":"JOR",
      "properties":
        {
          "name":"Jordan"
        },
      "geometry":
        {
          "type":"Polygon",
          "coordinates":
            [
              [
                [
                  35.545665,
                  32.393992
                ]
                ,
                [
                  35.719918,
                  32.709192
                ],
                [
                  36.834062,
                  32.312938
                ],
                [
                  38.792341,
                  33.378686
                ],
                [
                  39.195468,
                  32.161009
                ],
                [
                  39.004886,
                  32.010217
                ],
                [
                  37.002166,
                  31.508413
                ],
                [
                  37.998849,
                  30.5085],[37.66812,30.338665],[37.503582,30.003776],[36.740528,29.865283],[36.501214,29.505254],[36.068941,29.197495],[34.956037,29.356555],[34.922603,29.501326],[35.420918,31.100066],[35.397561,31.489086],[35.545252,31.782505],[35.545665,32.393992]]]}},    
  ]
}
GlobalMap.propTypes = {
  individuals: PropTypes.array.isRequired,  //  eslint-disable-line
  router: PropTypes.object.isRequired,  //eslint-disable-line
};


export default GlobalMap;