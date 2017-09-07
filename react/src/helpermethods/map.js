export function fillMarkers(individuals){
  const markers = [];
  for (let i = 0; i < individuals.length; i += 1) {
    markers.push({ lat: individuals[i].geo_loc.coordinates[0],
      lng: individuals[i].geo_loc.coordinates[1],
      popup: `<p style='display:none'>${individuals[i].id}</p>${individuals[i].name}` });
  }
  return markers;
};

export function findIndividualId(marker){
  const individualPopupHtml = (marker._popup._content); //  eslint-disable-line
  let individaulName = $.parseHTML(individualPopupHtml)[1].data;
  individaulName = individaulName.replace(/\s/g, '');
  const individaulID = $.parseHTML(individualPopupHtml)[0].innerHTML;
  return { individaulID, individaulName };
};

export function filterGEOJSON(terrorgroups) {
}