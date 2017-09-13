const initialState = {
  sanctionbodies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'RETRIEVED_ALL_SANCTION_BODIES':
      return {
        ...state,
        sanctionbodies: action.response.data.data,
      };
    default:
      return state;
  }
}

