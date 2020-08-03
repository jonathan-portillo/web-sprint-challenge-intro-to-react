import React, { useState } from "react";

const Character = (props) => {
  const { character, index } = props;
  console.log(character);
  return (
    <div>
      <h1>Name: {character.name}</h1>
      <p>DOB: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height}</p>
      <p>Eye Color: {character.eye_color}</p>
    </div>
  );
};

export default Character;
