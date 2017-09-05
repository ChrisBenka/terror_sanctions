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
            />
            <GeoJSON data={getGeoJson} style={getStyle} />
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















    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.47979164123535,
            37.830124319877235
          ],
          [
            -122.47721672058105,
            37.809377088502615
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.46923446655273,
          37.80293476836673
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.48399734497069,
          37.83466623607849
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.47867584228514,
          37.81893781173967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.48069286346434,
              37.800637436707525
            ],
            [
              -122.48069286346434,
              37.803104310307276
            ],
            [
              -122.47950196266174,
              37.803104310307276
            ],
            [
              -122.47950196266174,
              37.800637436707525
            ],
            [
              -122.48069286346434,
              37.800637436707525
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.48103886842728,
              37.833075326166274
            ],
            [
              -122.48065531253813,
              37.832558431940114
            ],
            [
              -122.4799284338951,
              37.8322660885204
            ],
            [
              -122.47963070869446,
              37.83231693093747
            ],
            [
              -122.47948586940764,
              37.832467339549524
            ],
            [
              -122.47945636510849,
              37.83273426112019
            ],
            [
              -122.47959315776825,
              37.83289737938241
            ],
            [
              -122.48004108667372,
              37.833109220743104
            ],
            [
              -122.48058557510376,
              37.83328293020496
            ],
            [
              -122.48080283403395,
              37.83332529830436
            ],
            [
              -122.48091548681259,
              37.83322785163939
            ],
            [
              -122.48103886842728,
              37.833075326166274
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.48043537139893,
              37.82564992009924
            ],
            [
              -122.48129367828368,
              37.82629397920697
            ],
            [
              -122.48240947723389,
              37.82544653184479
            ],
            [
              -122.48373985290527,
              37.82632787689904
            ],
            [
              -122.48425483703613,
              37.82680244295304
            ],
            [
              -122.48605728149415,
              37.82639567223645
            ],
            [
              -122.4898338317871,
              37.82663295542695
            ],
            [
              -122.4930953979492,
              37.82415839321614
            ],
            [
              -122.49700069427489,
              37.821887146654376
            ],
            [
              -122.4991464614868,
              37.82171764783966
            ],
            [
              -122.49850273132326,
              37.81798857543524
            ],
            [
              -122.50923156738281,
              37.82090404811055
            ],
            [
              -122.51232147216798,
              37.823344820392535
            ],
            [
              -122.50150680541992,
              37.8271414168374
            ],
            [
              -122.48743057250977,
              37.83093781796035
            ],
            [
              -122.48313903808594,
              37.82822612280363
            ],
            [
              -122.48043537139893,
              37.82564992009924
            ]
          ]
        ]
      }
    }
  ]
}
GlobalMap.propTypes = {
  individuals: PropTypes.array.isRequired,  //  eslint-disable-line
  router: PropTypes.object.isRequired,  //eslint-disable-line
};


export default GlobalMap;