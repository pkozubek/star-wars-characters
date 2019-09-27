import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  width: 50%;
`;

const Character = ({ data }) => {
  const { name } = data;
  return (
    <CharacterDiv>
      <h2>
        <label>Name:</label>
        {name}
      </h2>
    </CharacterDiv>
  );
};

export default Character;
