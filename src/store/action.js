import { getCharacterData, getAdditionalData } from "../api/api";

export const loadCharacterData = page => {
  return dispatch => {
    getCharacterData(page).then(apiResponse => {
      const { results: characters, hasNextPage } = apiResponse;

      dispatch(setNextPagePossible(hasNextPage));

      characters.forEach(singleCharacter => {
        delete singleCharacter.created;
        delete singleCharacter.edited;
        delete singleCharacter.url;
        delete singleCharacter.films;
        delete singleCharacter.vehicles;
        delete singleCharacter.starships;

        getAdditionalData(
          singleCharacter.homeworld,
          singleCharacter.species
        ).then(({ homeName, specieName }) => {
          singleCharacter.homeworld = homeName;
          singleCharacter.species = specieName;
          dispatch(addCharacter(singleCharacter));
        });
      });
    });
  };
};

const addCharacter = character => {
  return {
    type: "ADD_CHARACTER",
    characterData: character
  };
};

const setNextPagePossible = isPossible => {
  return {
    type: "SET_BLOCK",
    isBlocked: isPossible
  };
};
