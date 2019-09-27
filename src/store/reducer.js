const initialState = {
  characters: [],
  isBlocked: false,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case "ADD_CHARACTER":
      const { characterData } = action;

      return {
        ...state,
        characters: [...state.characters, characterData]
      };
    case "SET_BLOCK":
      const { isBlocked } = action;
      return {
        ...state,
        isBlocked: isBlocked
      };
    default:
      return state;
  }
};

export default reducer;
