import React from "react";
import { connect } from "react-redux";

import Character from "./character";

const renderCharacters = charactersArray => {
  const renderedCharacters = charactersArray.map(singleCharacter => {
    return <Character key={singleCharacter.name} data={singleCharacter} />;
  });

  return renderedCharacters;
};

const Characters = ({ charactersArray }) => {
  const characterToDisplay =
    charactersArray.length > 0
      ? renderCharacters(charactersArray)
      : "nie dziala";

  return <div>{characterToDisplay}</div>;
};

const mapStateToProps = ({ characters }) => {
  return {
    charactersArray: characters
  };
};

export default connect(mapStateToProps)(Characters);
