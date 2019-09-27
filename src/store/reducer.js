const initialState = {
  characters: [],
  isBlocked: false,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "SET_CHARACTERS":
      const { charactersArray } = action;
      return {
        ...state,
        characters: charactersArray
      };
    case "SET_BLOCK":
      const { isBlocked } = action;
      return {
        ...state,
        isBlocked: isBlocked
      };
    case "SET_LOADING":
      const { isLoading } = action;
      return {
        ...state,
        isLoading: isLoading
      };
    default:
      return state;
  }
};

export default reducer;
