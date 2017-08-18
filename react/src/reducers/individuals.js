const initialState = {
  individuals: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVED_ALL_INDIVIDUALS':
      return {
        ...state,
        individuals: action.response.data.data,
      };
    default:
      return state;
  }
}

