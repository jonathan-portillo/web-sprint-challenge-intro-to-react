import React, { useState } from "react";

const Character = (props) => {
  const { character } = props;
  console.log({ character });
  return (
    <div>
      This is where character Data Goes
      <p>Name: {character.name}</p>
    </div>
  );
};

export default Character;
