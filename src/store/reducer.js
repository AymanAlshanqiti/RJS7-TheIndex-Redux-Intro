import authors from "../data";

const initialState = {
  authors: authors
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload)
      };

    default:
      return state;
  }
};

export default reducer;
