import { getCharacterData } from "../api/api";

export const loadCharacterData = page => {
  return dispatch => {
    const gatheredCharacters = [];
    dispatch(setLoading(true));

    getCharacterData(page).then(apiResponse => {
      const { results: characters, hasNextPage } = apiResponse;

      dispatch(setNextPagePossible(hasNextPage));

      characters.forEach(singleCharacter => {
        gatheredCharacters.push(singleCharacter);
      });

      dispatch(setCharacters(gatheredCharacters));
      dispatch(setLoading(false));
    });
  };
};

const setCharacters = characters => {
  return {
    type: "SET_CHARACTERS",
    charactersArray: characters
  };
};

const setLoading = isLoading => {
  return {
    type: "SET_LOADING",
    isLoading: isLoading
  };
};

const setNextPagePossible = isPossible => {
  return {
    type: "SET_BLOCK",
    isBlocked: isPossible
  };
};
