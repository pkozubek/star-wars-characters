import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Character from "./character";

const CharactersContainer = styled.div`
  width: 100%;
`;

const Characters = ({ charactersArray, filters }) => {
  const filterCharacters = ({ name, minHeight, gender }, charactersArray) => {
    let filteredArray = charactersArray;

    if (name.trim() !== "") {
      filteredArray = filteredArray.filter(singleCharacter => {
        return singleCharacter.name.includes(name);
      });
    }

    if (minHeight) {
      filteredArray = filteredArray.filter(singleCharacter => {
        return Number(singleCharacter.height) >= minHeight;
      });
    }

    if (gender !== "All") {
      filteredArray = filteredArray.filter(singleCharacter => {
        return singleCharacter.gender === gender;
      });
    }

    return filteredArray;
  };

  const renderCharacters = charactersArray => {
    const filteredCharacters = filterCharacters(filters, charactersArray);

    const renderedCharacters = filteredCharacters.map(singleCharacter => {
      return <Character key={singleCharacter.name} data={singleCharacter} />;
    });

    return renderedCharacters;
  };

  const characterToDisplay =
    charactersArray.length > 0
      ? renderCharacters(charactersArray)
      : "nie dziala";

  return <CharactersContainer>{characterToDisplay}</CharactersContainer>;
};

const mapStateToProps = ({ characters }) => {
  return {
    charactersArray: characters
  };
};

export default connect(mapStateToProps)(Characters);
