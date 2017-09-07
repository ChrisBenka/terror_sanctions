const initialState = {
  terrorgroups: [],
  geoJson: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVED_ALL_TERROR_GROUPS':
      return {
        ...state,
        terrorgroups: action.response.data.data,
      };
    case 'RETRIEVED_ALL_GEO_JSONS':
      return {
        ...state,
        geoJson: action.resposne.data.data,
      };
    default:
      return state;
  }
}
