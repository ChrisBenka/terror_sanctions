const initialState = {
  individuals: [],
  individual: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVED_ALL_INDIVIDUALS':
      return {
        ...state,
        individuals: action.response.data.data,
      };
    case 'RETRIEVED_INDIVIDUAL':
      return {
        ...state,
        individual: action.response.data.data,
      };
    default:
      return state;
  }
}

