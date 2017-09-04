import React, { Component, PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
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
  render() {
    const { individuals, router } = this.props;
    if (individuals.length > 0) {
      const markers = fillMarkers(individuals);
      return (
        <div>
          <Map className="markercluster-map" center={[51.0, 19.0]} zoom={4} maxZoom={18}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
export default GlobalMap;

GlobalMap.propTypes = {
  individuals: PropTypes.array.isRequired,  //  eslint-disable-line
  router: PropTypes.object.isRequired,  //eslint-disable-line
};
