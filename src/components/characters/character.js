import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  width: calc(60% - 50px);
  border: 1px solid rgba(5, 162, 252, 0.2);
  margin: 25px auto;
  padding: 25px;
  border-radius: 25px;

  label {
    font-weight: bold;
  }

  h2 {
    width: 80;
    margin: 5px auto;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Character = ({ data }) => {
  const characterArray = Object.keys(data).map(function(key) {
    return { name: key, value: data[key] };
  });

  const characterKey = characterArray.name;

  const renderedData = characterArray.map(row => {
    const { name, value } = row;

    return name === "name" ? (
      <h2 key={characterKey + name}>{value}</h2>
    ) : (
      <p key={characterKey + name}>
        <label>{name}: </label>
        {value}
      </p>
    );
  });

  return <CharacterDiv>{renderedData}</CharacterDiv>;
};

export default Character;
