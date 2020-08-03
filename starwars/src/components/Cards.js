import React from "react";
import Character from "./Character";

const Cards = (cardInfo) => {
  return cardInfo.data.map((character, index) => {
    return <Character character={character} key={index} />;
  });
};
export default Cards;
