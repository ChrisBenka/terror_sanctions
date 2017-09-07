import $ from 'jquery';

export function fillMarkers(individuals) {
  const markers = [];
  for (let i = 0; i < individuals.length; i += 1) {
    markers.push({ lat: individuals[i].geo_loc.coordinates[0],
      lng: individuals[i].geo_loc.coordinates[1],
      popup: `<p style='display:none'>${individuals[i].id}</p>${individuals[i].name}` });
  }
  return markers;
}

export function findIndividualId(marker) {
  const individualPopupHtml = (marker._popup._content); //  eslint-disable-line
  let individaulName = $.parseHTML(individualPopupHtml)[1].data;
  individaulName = individaulName.replace(/\s/g, '');
  const individaulID = $.parseHTML(individualPopupHtml)[0].innerHTML;
  return { individaulID, individaulName };
}

export function buildTerrorGroupCountryHash(terrorgroups) {
  const hashMapCountriesToTerrorGroups = {};
  terrorgroups.forEach((group) => {
    group.locations.forEach((location) => {
      if (!Object.keys(hashMapCountriesToTerrorGroups).includes(location.country)) {
        hashMapCountriesToTerrorGroups[location.country] = [];
        hashMapCountriesToTerrorGroups[location.country].push(group.name);
      } else {
        hashMapCountriesToTerrorGroups[location.country].push(group.name);
      }
    });
  });
  return hashMapCountriesToTerrorGroups;
}

export function filterGeoJsonByTerrorLocations(hashmapOfTerrorLocations, geoJson) {
  const features = geoJson.features.filter((feature) => { //eslint-disable-line
    if (Object.keys(hashmapOfTerrorLocations).includes(feature.properties.name)) {
      feature.properties.terrorgroups = []; //  eslint-disable-line
      feature.properties.terrorgroups = hashmapOfTerrorLocations[feature.properties.name];  //  eslint-disable-line
      return feature;
    }
  });
  return features;
}
