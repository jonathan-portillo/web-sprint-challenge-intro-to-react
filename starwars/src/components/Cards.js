import React from "react";
import Character from "./Character";
import { Container } from "reactstrap";
import styled from "styled-components";

const Box = styled.div`
  display: block;
  width: 20%;
  margin-left: 35rem;
  padding-bottom: 3rem;
`;

const Cards = (cardInfo) => {
  return cardInfo.data.map((character, index) => {
    return (
      <Box>
        <Container className="themed-container" fluid="xl">
          <Character character={character} key={index} />
        </Container>
      </Box>
    );
  });
};
export default Cards;
