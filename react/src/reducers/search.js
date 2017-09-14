const initialState = {
  searchQueryResults:{},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETIREVED_SEARCH_DATA':
      return {
        ...state,
        searchQueryResults:action.data,
      };
    default:
      return state;
  }
}
