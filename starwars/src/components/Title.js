import React from "react";
import { Jumbotron, Button } from "reactstrap";
import styled from "styled-components";
const Boxed = styled.div`
  display: block;
  width: 40%;
  margin-left: 27rem;
  color: brown;
  font-family: Andale Mono;
`;

const Title = (props) => {
  return (
    <Boxed>
      <Jumbotron fluid>
        <h1 className="display-3" color="warning">
          Star Wars Icons
        </h1>
        <p className="lead">Learn More about your favorite Characters</p>
      </Jumbotron>
    </Boxed>
  );
};

export default Title;
